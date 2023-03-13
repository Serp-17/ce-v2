import React, { memo } from 'react';
import Select from 'react-select';

function CustomSelect (props) {
  const { options,
    handleChange,
    name,
    defaultVal,
    inputRef
  } = props;

  return (
    <Select
      inputRef={inputRef}
      id={name}
      options={options}
      name={name}
      onChange={val => handleChange(val.name)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'rgb(75 74 207)',
          borderColor: 'rgb(141 141 255)',
          height: '100%',
          width: '100px'
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: '#fff',
        }),
      }}
      // components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    />
  )
}

export default memo(CustomSelect);
