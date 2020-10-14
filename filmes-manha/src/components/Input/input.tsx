import React, {InputHTMLAttributes} from 'react';

import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) =>{
return(
    <div>
        <label htmlFor={name}>{label}
        <input type="text" id={name} {...rest} />
        </label>
    </div>
)
}

export default Input;