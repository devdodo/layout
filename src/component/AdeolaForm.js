import React from 'react'
import InputForm from './InputForm'

const AdeolaForm = () => {
    const inputProps = [
        {
            label: "Full Name",
            inputType: "text",
            placeholder: "Enter your Full Name"
        },
        {
            label: "Nickname",
            inputType: "text",
            placeholder: "Enter your Nickname",
            required: true
        },
        {
            label: "Email",
            inputType: "email",
            placeholder: "Enter your Email"
        },
        {
            label: "Password",
            inputType: "password",
            placeholder: "Enter your Password"
        },
        {
            label: "Confirm Password",
            inputType: "password",
            placeholder: "Confirm your Password"
        }
    ]

  return (
    <div className="form-bg">
        <h2>Registration Form</h2>
        <form>
            {
                inputProps.map(item => {
                    return(
                        <InputForm inputProps={item} />
                    )
                })
            }
            <div className='form-group'>
                <button>Register</button>
            </div>
        </form>
    </div>
  )
}

export default AdeolaForm