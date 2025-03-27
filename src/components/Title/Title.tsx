// @ts-ignore
import cs from './Title.module.css';


export const Title = ({title} : {title:string}) => {
    return (
        <h1 className={cs.title}>{title}</h1>
    )
}