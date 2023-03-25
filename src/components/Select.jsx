import React, {memo} from 'react';
import Select, {components} from 'react-select';
const { Option } = components;

const IconOption = props => (
    <Option {...props}>
        {/*<img*/}
        {/*    src="https://www.cryptocompare.com//media/37746047/matic.png"*/}
        {/*    style={{ width: 15 }}*/}
        {/*    alt={props.data.label}*/}
        {/*/>*/}
            {props.data.label}
    </Option>
);

function CustomSelect (props) {
    const {
        options,
        handleChange,
        name,
        inputRef,
        defaultValue
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
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  height: '100%',
                  width: '100px'
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  color: '#000',
                }),
                option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                    ...provided,
                    backgroundColor: isSelected ? "#fff" : "#fff",
                    color: "#000"
                })
            }}
            defaultValue={defaultValue}
            components={{
                // DropdownIndicator:() => null, IndicatorSeparator:() => null,
                Option: IconOption
            }}
        />
    )
}

export default memo(CustomSelect);
