import React from "react";

export const INPUT_TYPE = { 
    TEXT: 'text'
}

export const TextInput = ({name, placeholder, value, onChange, onClick, onFocus, isRequired, isDisabled, isReadOnly, errorText, showErrorText = true, inputClassName = "form-control" }) => (
    <>
        <input
            id={name}
            name={name}
            placeholder={placeholder}
            type="text"
            className={`${inputClassName}${errorText ? ' is-invalid' : ''}`}
            required={isRequired || false}
            value={value || ''}
            onClick={(e) => onClick ? onClick(e) : {}}
            onChange={(e) => onChange ? onChange(e) : {}}
            onFocus={(e) => onFocus ? onFocus(e) : {}}
            disabled={isDisabled || false}
            readOnly={isReadOnly || false}
        />
        {(showErrorText && errorText) && (
            <span className='invalid-feedback d-block' role='alert'>
                <strong>{errorText}</strong>
            </span>
        )}
    </>
);

const FormInputRow = ({inputType, title, name, placeholder, itemList, value, isChecked, onChange, isRequired, isDisabled, isReadOnly, errorText, rowContainerClass, labelContainerClass, inputContainerClass, formConfigs = {}, rows, ...resProps}) => {
    return (
        <div className={rowContainerClass ? rowContainerClass : "row m-2"}>
            {title && <label htmlFor={name || null} className={labelContainerClass ? labelContainerClass : "col-md-4 col-form-label text-md-right"}>{title}</label>}
            <div className={(inputContainerClass ? inputContainerClass : "col-md-6 align-self-center") + (title ? "" : " offset-md-4")}>
                {(() => {
                    switch(inputType) {  
                        default:
                            return <TextInput name={name} placeholder={placeholder} value={value} onChange={onChange} isRequired={isRequired} isDisabled={isDisabled} isReadOnly={isReadOnly} errorText={errorText} />
                    }
                })()}
                {resProps.children}
            </div>
        </div>
    );
};

export default FormInputRow;
