import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Typewriter from './Typewriter.jsx';
import {useLoading , Circles } from '@agney/react-loading';
import { ShimmerText } from "react-shimmer-effects";

const Result = ({ answers, carInfo }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ShimmerText line={7} gap={10} />,
  });
  const [prediction, setPrediction] = useState(null);
  useEffect(() => {
    // Make an HTTP POST request to your Flask API endpoint
    axios.post('http://172.20.10.14:8080/predict', carInfo)
      .then(response => {
        // Handle the response and set the prediction state
        const { price } = response.data;
        setPrediction(price);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [carInfo]);
  const price = 50000;
  let accedentPercentage = parseFloat(answers.accident);
  let accedentValue = accedentPercentage * price;

  let paint = parseInt(answers.paint);
  let paintValues = 0;

  if (paint === 11) {
    // Calculate the sum of parts values
    paintValues = answers.parts.reduce((total, part) => total + parseFloat(part.value), 0);
  }
  let paintValue = paintValues * price;
  let electricalMechanicalPercentage = parseFloat(answers.electricalMechanical);
  let electricalMechanicalValue = electricalMechanicalPercentage * price;
  
  let originalPartsPercentage = parseFloat(answers.originalParts);
  let originalPartsValue = originalPartsPercentage * price;
  
  let periodicExaminationValue = parseInt(answers.periodicExamination);
  let reduce = price - accedentValue - paintValue - electricalMechanicalValue - originalPartsValue - periodicExaminationValue;

  return (
    <div>
      {prediction !== null ? (
        <Typewriter model={carInfo.selectedModel.value} brand={carInfo.selectedBrand.value} year={carInfo.year} price={prediction-reduce} />
        
      ) : (
        <section {...containerProps}>
      {indicatorEl} {/* renders only while loading */}
    </section>
      )}
    </div>
  );
};

export default Result;