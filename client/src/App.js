import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import CarInfoForm from './Components/CarInfoForm.jsx';
import QuestionsForm from './Components/QuestionsForm.jsx';
import ResultForm from './Components/ResultForm.jsx';
import Steps from './Components/Steps.jsx';
import { UseForm } from './hooks/UseForm.jsx';
import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [carInfo, setCarInfo] = useState({})
  const [answers, setAnswers] = useState({});
  const [radioValidity, setRadioValidity] = useState(true);
  const formRef = useRef(null);
  const [prediction, setPrediction] = useState(null);

  const handleRadioChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };
  
  const handleMultiSelectChange = (selected) => {
    setAnswers({ ...answers, parts: selected });
  };
  
  const handleRestChange = (e) => {
    ChangeStep(0, e);
    setAnswers({});
    setRadioValidity(true);
  }
  const handleBackClick = () =>{
    setRadioValidity(true);
    ChangeStep(currentStep - 1);
  }
  const handleFormDataChange = (formData) => {
    console.log('formData: in app');
    console.log(formData);
    if (JSON.stringify(formData) !== JSON.stringify(carInfo)) {
      setCarInfo(formData);
    }
  };
  const formComponents = [
    <CarInfoForm handleFormDataChange={handleFormDataChange} />,
    <QuestionsForm handleRadioChange={handleRadioChange} handleMultiSelectChange={handleMultiSelectChange} />,
    <ResultForm answers={answers} carInfo={carInfo}/>,
  ];

  const { currentStep, currentComponent, ChangeStep, isLastStep, isFirstStep } = UseForm(formComponents);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let isValid = true;

    const radioGroups = formRef.current.querySelectorAll('input[type="radio"]');
    radioGroups.forEach((radioGroup) => {
      const groupName = radioGroup.getAttribute('name');
      const radios = formRef.current.querySelectorAll(`input[type="radio"][name="${groupName}"]`);
      if (![...radios].some((radio) => radio.checked)) {
        isValid = false;
      }
    });
  
    if(currentStep === 0){
      ChangeStep(currentStep + 1, e);
    }else if (currentStep === 1 && isValid){
      ChangeStep(currentStep + 1, e);
      setRadioValidity(true);
    }else{
      setRadioValidity(false);
    }
  };

  return (
    <div className="App">
      <div className="header">
      <h3 className="headerText" style={{ color: `rgb(42, 57, 141)` }}>
          Get The Best Price of Your Car
        </h3>
        <h1 className="headerTopic" style={{ color: `rgb(71, 181, 85)` }}>
          Using AI Model
        </h1>
        <img src="/img/search_car.png" alt="" />
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {(!isFirstStep && !isLastStep)&& (
              <button type="button" className="backB" onClick={() => handleBackClick()}>
                <span className="bText">Back</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit" className="nextB" >
                <span className="bText">Next</span>
              </button>
            ) : (
              <button type="button" className="goB" onClick={(e) => handleRestChange(e)}>
                <span className="bText">Rest</span>
              </button>
            )}
          </div>
          {(!radioValidity && currentStep===1) && (
            <p className="error">Please fill in all the required radio buttons.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
