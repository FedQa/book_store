// @ts-ignore
import cs from './Button.module.css';

export interface ButtonProps {
    onClick?: () => void | Promise<void>;
    name?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={cs.button}
        >{props.name}</button>
    )
}