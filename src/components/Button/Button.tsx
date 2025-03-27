// @ts-ignore
import cs from './Button.module.css';

export interface ButtonProps {
    clickFn?: () => void | Promise<void>;
    name?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.clickFn}
            className={cs.button}
        >{props.name}</button>
    )
}