import React from 'react';

const Input = ({
    name,
    register,
    errors,
    type,
    required,
    disabled,
    label
}) =>  (
    <div className="form-control-input w-full">
        {label && <label htmlFor="">{label}</label>}
        <input
              name={name}
              type={type}
              disabled={disabled}
              onBlur={(e) => console.log(e)}
              className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 text-white placeholder-purple-400"
              {...register(name)}
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
