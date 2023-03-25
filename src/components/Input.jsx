import React from 'react';

const Input = ({
    name,
    register,
    errors,
    type,
    required,
    disabled,
    label,
    onBlur
}) => (
    <div className="form-control-input w-full">
        {label && <label htmlFor="">{label}</label>}
        <input
              name={name}
              type="text"
              disabled={disabled}
              className="w-full appearance-none border border-black focus:border-black rounded-sm px-4 py-3 text-black placeholder-black"
              {...register(name, {
                  onChange: (e) => {
                      const {value} = e.target;
                      if (type === "number") {
                          e.target.value = value.replace(/[^0-9.]/, '')
                      }
                  },
                  onBlur: (e) => onBlur(e),
              })}
        />
        {errors && errors[name]?.type === "required" && (
            <span className="error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === "minLength" && (
            <span className="error">{errors[name]?.message}</span>
        )}
    </div>
)

export default Input;
