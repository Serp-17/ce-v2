import React from 'react';
import Select from 'react-select';
const options = [
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' }
]

const ChangeLanguage = () => {
    return <Select
        options={options}
        styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'none',
                borderColor: 'none',
                border: 'none',
                height: '100%',
            }),
            singleValue: (provided, state) => ({
                ...provided,
                color: '#fff',
            }),
        }}
        defaultValue={options.find(l => l.value === localStorage.getItem("language").replace(/['"«»]/g, ''))}
        components={{
            DropdownIndicator:() => null, IndicatorSeparator:() => null,
        }}
    />
}

export default ChangeLanguage;
