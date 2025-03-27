// @ts-ignore
import cs from './Input.module.css'


type InputProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    className?: string;
}


export const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            className={`${cs.input} ${props.className}`}
        />
    )
}