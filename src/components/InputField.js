import React, { useState } from 'react'

function InputField(props) {

    const [value, setValue] = useState(''); 

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onChange(event.target.name, event.targer.value)
    }

    return (
        <div className="input-wrapper">
            {props.label && (
                <label>{props.label}</label>
            )}
            <input
                placeholder={props.placeholder}
                name={props.name}
                onChange={ (event) => handleChange(event) }
                type={props.type}
                value={props.value ? props.value: value}
                autoComplete={props.autoComplete}

            />
        </div>
    )
}

InputField.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off"

}

export default InputField
