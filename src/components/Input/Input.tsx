// @ts-ignore
import cs from './Input.module.css'
import React from "react";


type InputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            className={`${cs.input} ${props.className}`}
            onChange={props.onChange}
        />
    )
}