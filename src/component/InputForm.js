import React from 'react'

const InputForm = ({inputProps}) => {

    const {label, inputType, placeholder, required} = inputProps

    let displayText = (e) => console.log(e.target.value)

    return (
    <div className='form-group'>
        <label>{label}</label>
        <input type={inputType} placeholder={placeholder} required={ required && required } onBlur={displayText} />
    </div>
  )
}

export default InputForm