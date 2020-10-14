import React, { ButtonHTMLAttributes } from 'react';
import './botao.css';
import '../../assests/style/global.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: any;
    value: string;
}

const Button:React.FC<ButtonProps> = ({onClick,value}) => {
    return(
        <div>
            <button onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button;

