import "./Steps.css"
import {MdCarCrash} from 'react-icons/md'
import {TbReportSearch} from 'react-icons/tb'
import {MdOutlinePriceChange} from 'react-icons/md'
const Steps = ({currentStep}) => {
  return <div className="steps">
      <div className="step active">
      <MdCarCrash/>
        <p>Car Info</p>
      </div>
      <div className={`step ${currentStep >= 1? "active" : ""}`}>
      <TbReportSearch/>
        <p>Questions</p>
      </div>
      <div className={`step ${currentStep >= 2? "active" : ""}`}>
      <MdOutlinePriceChange/>
        <p>Price</p>
      </div>
    </div>
  
}

export default Steps
