import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';

const CarInfoForm = ({ handleFormDataChange }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedGearType, setSelectGearType] = useState('');
  const [selectedOption, setSelectOption] = useState('');
  const [year, setYear] = useState('');
  const [odometer, setOdometer] = useState('');
  const [engineSize, setEngineSize] = useState('');

  const Options = [
    { value: 'Standard', label: 'Standard' },
    { value: 'Semi Full', label: 'Semi Full' },
    { value: 'Full', label: 'Full' },
  ];

  const Gears = [
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
    { value: 'CVT', label: 'CVT' },
  ];

  const fetchBrands = async (inputValue) => {
    try { 
      const response = await fetch('http://172.20.10.14:5000/brands');
      const data = await response.json();
      const options = data.map((item) => ({
        label: item.brand,
        value: item.brand,
      }));
      return options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error('Error fetching brands:', error);
      return [];
    }
  };

  const fetchModels = async (inputValue) => {
    try {
      if (!selectedBrand) {
        return [];
      }

      const response = await fetch('http://172.20.10.14:5000/models');
      const data = await response.json();
      const filteredModels = data.filter(
        (item) => item.Brand === selectedBrand.value
      );
      const options = filteredModels.map((item) => ({
        label: item.Model,
        value: item.Model,
      }));
      return options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error('Error fetching models:', error);
      return [];
    }
  };

  const fetchColors = async (inputValue) => {
    try {
      const response = await fetch('http://172.20.10.14:5000/colors');
      const data = await response.json();
      const options = data.map((item) => ({
        label: item.color,
        value: item.color,
      }));
      return options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error('Error fetching brands:', error);
      return [];
    }
  };

  const handleYearChange = (e) => {
    const yearValue = e.target.value;
    const parsedYear = yearValue !== '' ? parseInt(yearValue) : '';

    setYear(parsedYear);
  };

  const handleOdometerChange = (e) => {
    const odometerValue = e.target.value;
    const parsedOdometer = odometerValue !== '' ? parseInt(odometerValue) : '';

    setOdometer(parsedOdometer);
  };

  const handleEngineSizeChange = (e) => {
    const engineSizeValue = e.target.value;
    const parsedEngineSize = engineSizeValue !== '' ? parseFloat(engineSizeValue) : '';

    setEngineSize(parsedEngineSize);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e);
    setSelectedModel('');
  }

  useEffect(() => {
    handleFormDataChange({
      selectedBrand,
      selectedModel,
      selectedColor,
      selectedGearType,
      selectedOption,
      year,
      odometer,
      engineSize,
    });
  }, [
    selectedBrand,
    selectedModel,
    selectedColor,
    selectedGearType,
    selectedOption,
    year,
    odometer,
    engineSize,
    handleFormDataChange,
  ]);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? 'rgb(71, 181, 85)' : provided.borderColor,
      boxShadow: 'none',
      '&:hover': {
        borderColor: state.isFocused ? 'rgb(71, 181, 85)' : provided.borderColor
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(71, 181, 85)' : '',
      color: state.isSelected ? 'black' : provided.color,
      '&:hover': {
        backgroundColor: 'lightgreen'
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : provided.color
    })
  };
  return (
    <div className="CarInfoForm">
      
      <div className="form-control">
        <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedBrand}
          loadOptions={fetchBrands}
          onChange={handleBrandChange}
          placeholder="Brand Car"
          styles={customStyles}
          required
        />
      </div>
      <div className="form-control">
        <AsyncSelect
          key={selectedBrand ? selectedBrand.value : ''}
          cacheOptions
          defaultOptions
          value={selectedModel}
          loadOptions={fetchModels}
          onChange={setSelectedModel}
          isDisabled={!selectedBrand}
          placeholder="Model Car"
          styles={customStyles}
          required
        />
      </div>
      <div className="form-control">
        <Select
          cacheOptions
          defaultOptions
          value={selectedOption}
          options={Options}
          onChange={setSelectOption}
          isDisabled={!selectedModel}
          placeholder="Option"
          styles={customStyles}
          required
        />
      </div>
      <div className="form-control">
        <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedColor}
          loadOptions={fetchColors}
          onChange={setSelectedColor}
          isDisabled={!selectedOption}
          placeholder="Color"
          styles={customStyles}
          required
        />
      </div>
      <div className="form-control">
        <Select
          cacheOptions
          defaultOptions
          value={selectedGearType}
          options={Gears}
          onChange={setSelectGearType}
          isDisabled={!selectedColor}
          placeholder="Gear Type"
          styles={customStyles}
          required
        />
      </div>
      <div className="form-control-input">
        <label htmlFor="year">Year of Make</label>
        <input
          type="text"
          name="year"
          id="year"
          value={year.toString()}
          onChange={handleYearChange}
          required
        />
      </div>
      <div className="form-control-input">
        <label htmlFor="odometer">Odometer</label>
        <input
          type="text"
          name="odometer"
          id="odometer"
          value={odometer.toString()}
          onChange={handleOdometerChange}
          required
        />
      </div>
      <div className="form-control-input">
        <label htmlFor="size">Engine Size</label>
        <input
          type="number"
          name="size"
          id="size"
          value={engineSize.toString()}
          onChange={handleEngineSizeChange}
          required
        />
      </div>
    </div>
  );
};

export default CarInfoForm;
