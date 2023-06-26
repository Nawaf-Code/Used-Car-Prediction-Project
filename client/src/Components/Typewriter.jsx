import React, { useState, useEffect } from 'react';
import {BsFillEmojiSmileFill,BsFillEmojiNeutralFill,BsFillEmojiFrownFill,BsFillEmojiAngryFill} from 'react-icons/bs';
import './UserOpinion.css';
const Typewriter = ({ model, brand, year, price, callback }) => {
  const [displayText, setDisplayText] = useState('');
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [thirdPart, setThirdPart] = useState('');
  const [fourthPart, setFourthPart] = useState('');
  const [fifthPart, setFifthPart] = useState('');
  const [sixthPart, setSixthPart] = useState('');
  const [seventhPart, setSeventhPart] = useState('');
  const [eighthPart, setEighthPart] = useState('');
  const [ninthPart, setNinthPart] = useState('');

  const [currentWordIndex1, setCurrentWordIndex] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [currentWordIndex3, setCurrentWordIndex3] = useState(0);
  const [currentWordIndex4, setCurrentWordIndex4] = useState(0);
  const [currentWordIndex5, setCurrentWordIndex5] = useState(0);
  const [currentWordIndex6, setCurrentWordIndex6] = useState(0);
  const [currentWordIndex7, setCurrentWordIndex7] = useState(0);
  const [currentWordIndex8, setCurrentWordIndex8] = useState(0);
  const [currentWordIndex9, setCurrentWordIndex9] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const t1 = 'Based on the information provided, the price of a '
  const words1 = t1.split(' ');

  const t2 = brand+' '+ model+ ' '+year+ ' ';
  const words2 = t2.split(' ');

  const t3 = 'in Saudi Arabia can reach around '
  const words3 = t3.split(' ');
  
  const t4 = price + ' ';
  const words4 = t4.split(' ');

  const t5 = 'Saudi riyals. However, please note that this prediction is an ';
  const words5 = t5.split(' ');

  const t6 = 'estimate only'
  const words6 = t6.split(' ');

  const t7 = 'and may not be indicative of the actual price at which the car is sold in the market. The ';
  const words7 = t7.split(' ');

  const t8 = 'actual price'
  const words8 = t8.split(' ');

  const t9 = 'can be affected by multiple factors, such as the condition of the car, demand level in the market, geographical region, and other factors.';
  const words9 = t9.split(' ');

  let finished = false;

  useEffect(() => {
    if (currentWordIndex1 < words1.length) {
        const timeout = setTimeout(() => {
            setFirstPart((prevText) => prevText + ' ' + words1[currentWordIndex1]);
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
      }
    if (currentWordIndex2 < words2.length){
        const timeout = setTimeout(() => {
            setSecondPart((prevText) => prevText + ' ' + words2[currentWordIndex2]);
          setCurrentWordIndex2((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex3 < words3.length){
        const timeout = setTimeout(() => {
            setThirdPart((prevText) => prevText + ' ' + words3[currentWordIndex3]);
          setCurrentWordIndex3((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex4 < words4.length){
        const timeout = setTimeout(() => {
            setFourthPart((prevText) => prevText + ' ' + words4[currentWordIndex4]);
          setCurrentWordIndex4((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex5 < words5.length){
        const timeout = setTimeout(() => {
            setFifthPart((prevText) => prevText + ' ' + words5[currentWordIndex5]);
          setCurrentWordIndex5((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex6 < words6.length){
        const timeout = setTimeout(() => {
            setSixthPart((prevText) => prevText + ' ' + words6[currentWordIndex6]);
          setCurrentWordIndex6((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex7 < words7.length){
        const timeout = setTimeout(() => {
            setSeventhPart((prevText) => prevText + ' ' + words7[currentWordIndex7]);
          setCurrentWordIndex7((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex8 < words8.length){
        const timeout = setTimeout(() => {
            setEighthPart((prevText) => prevText + ' ' + words8[currentWordIndex8]);
          setCurrentWordIndex8((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    if (currentWordIndex9 < words9.length){
        const timeout = setTimeout(() => {
            setNinthPart((prevText) => prevText + ' ' + words9[currentWordIndex9]);
          setCurrentWordIndex9((prevIndex) => prevIndex + 1);
        }, 60);
        return () => clearTimeout(timeout);
    }
    
    }, [currentWordIndex1, words1]);
    useEffect(() => {
      if (currentWordIndex9 >= words9.length){
        setIsTypingComplete(true)
      }
    }, [currentWordIndex9, words9])

  return (<div className="contain">

    <span className="normal">{firstPart}</span>
    <span className="green">{secondPart}</span>
    <span className="normal">{thirdPart}</span>
    <span className="price">{fourthPart}</span>
    <span className="normal">{fifthPart}</span>
    <span className="red">{sixthPart}</span>
    <span className="normal">{seventhPart}</span>
    <span className="green">{eighthPart}</span>
    <span className="normal">{ninthPart}</span>

    {isTypingComplete && (
      <div className="user-opinion-container">
        <div className='form-control score-container'>

        <label className="radio-container">
         <input type="radio" value='Satisfied' name='review' />
         <BsFillEmojiSmileFill/>
         <p>Satisfied</p>
      </label>

      <label className="radio-container">
         <input type="radio" value='Neutral' name='review' />
         <BsFillEmojiNeutralFill/>
         <p>Neutral</p>
      </label>
      
      <label className="radio-container">
         <input type="radio" value='Unsatisfied' name='review' />
         <BsFillEmojiFrownFill/>
         <p>Unsatisfied</p>
      </label>
      

      <label className="radio-container">
         <input type="radio" value='Angry' name='review' />
         <BsFillEmojiAngryFill/>
         <p>not realistic</p>
      </label>
      </div>
      
      <div className="form-control">
        <label htmlFor="comment">Add Comment</label>
        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Express your opinion about what is expected to improve the model"></textarea>
      </div>
      </div>
      
      
    )}

  </div>);
};

export default Typewriter;