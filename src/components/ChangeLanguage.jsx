import React from 'react';
import Select from 'react-select';
import useLocalStorage from "../hooks/useLocalStorage";
import i18n from '../i18n';
const options = [
    { value: 'ru', label: 'ru' },
    { value: 'en', label: 'en' }
]

const ChangeLanguage = () => {
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const handleLanguageChange = (val) => {
        console.log(val)
        i18n.changeLanguage(val);
        setLanguage(val);
    };

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
        onChange={(e) => handleLanguageChange(e.value)}
        defaultValue={options.find(l => l.value === localStorage.getItem("language").replace(/['"«»]/g, ''))}
        components={{
            DropdownIndicator:() => null, IndicatorSeparator:() => null,
        }}
    />
}

export default ChangeLanguage;
