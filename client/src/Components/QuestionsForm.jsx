import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ReactSelect from 'react-select';
import './QuestionsForm.css'; // Import custom CSS file

const QuestionsForm = ({ handleRadioChange, handleMultiSelectChange }) => {
  const [showMultiSelect, setShowMultiSelect] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleAccidentChange = (event) => {
    handleRadioChange(event);
  };

  const handlePaintChange = (event) => {
    if (event.target.value === '11') {
      setShowMultiSelect(true);
    } else {
      setShowMultiSelect(false);
      setSelectedOptions([]);
    }
    handleRadioChange(event);
  };

  const handleElectricalMechanicalChange = (event) => {
    handleRadioChange(event);
  };

  const handleOriginalPartsChange = (event) => {
    handleRadioChange(event);
  };

  const handleMultiSelect = (selected) => {
    setSelectedOptions(selected);
    handleMultiSelectChange(selected);
  };

  const multiSelectOptions = [
    { value: 0.15, label: 'Doors' },
    { value: 0.1, label: 'Rear Bumper' },
    { value: 0.1, label: 'Front Bumper' },
    { value: 0.1, label: 'Engine Hood' },
    { value: 0.07, label: 'Trunk' },
    { value: 0.102, label: 'Wings' },
  ];

  return (
    <div>
      <div className="questions">
        <FormControl required> {/* Add 'required' attribute */}
          <label id="demo-radio-buttons-group-label">Has the car been in an accident?</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="accident"
            className="radio-group" // Add custom CSS class
            onChange={handleAccidentChange}
          >
            <FormControlLabel value="0.0" control={<Radio />} label="No" />
            <FormControlLabel value="0.05" control={<Radio />} label="Yes, simple accident" />
            <FormControlLabel value="0.10" control={<Radio />} label="Yes, moderate accident" />
            <FormControlLabel value="0.30" control={<Radio />} label="Yes, strong accident" />
            <FormControlLabel value="0.45" control={<Radio />} label="Yes, it is salvage" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="questions">
        <FormControl required> {/* Add 'required' attribute */}
          <label id="demo-radio-buttons-group-label">Is the car paint damaged or has it been changed?</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="paint"
            className="radio-group" // Add custom CSS class
            onChange={handlePaintChange}
          >
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="11" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
        {showMultiSelect && (
          <div className="questions">
            <FormControl>
              <div className="multiSelect">
                <label id="multi-select-label">Select parts:</label>
                <ReactSelect
                  id="multi-select"
                  options={multiSelectOptions}
                  isMulti
                  value={selectedOptions}
                  onChange={handleMultiSelect}
                  placeholder=""
                />
              </div>
            </FormControl>
          </div>
        )}
      </div>
      <div className="questions">
        <FormControl required> {/* Add 'required' attribute */}
          <label id="demo-radio-buttons-group-label">Is there any damage to the electrical or mechanical system of the car?</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="electricalMechanical"
            className="radio-group" // Add custom CSS class
            onChange={handleElectricalMechanicalChange}
          >
            <FormControlLabel value="0.0" control={<Radio />} label="No" />
            <FormControlLabel value="0.10" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="questions">
        <FormControl required> {/* Add 'required' attribute */}
          <label id="demo-radio-buttons-group-label">Have any original parts been replaced with non-original parts?</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="originalParts"
            className="radio-group" // Add custom CSS class
            onChange={handleOriginalPartsChange}
          >
            <FormControlLabel value="0.0" control={<Radio />} label="No" />
            <FormControlLabel value="0.1" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="questions">
        <FormControl required> {/* Add 'required' attribute */}
          <label id="demo-radio-buttons-group-label">The end date of the periodic examination</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="periodicExamination"
            className="radio-group" // Add custom CSS class
            onChange={handleRadioChange}
          >
            <FormControlLabel value="300" control={<Radio />} label="Less than 6 months" />
            <FormControlLabel value="0" control={<Radio />} label="More than 6 months" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default QuestionsForm;
