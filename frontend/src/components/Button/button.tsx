import React, { ButtonHTMLAttributes } from 'react';
import './button.css';
import '../../assests/style/global.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

const Button:React.FC<ButtonProps> = ({value}) => {
    return(
        <div>
          <input className="button" type="submit" value={value}/>
        </div>
    )
}

export default Button;

