import s from '../styles/button.module.css';

export default function Button({text, disabled}){
    return (
        <input type="button" class={s.input} disabled = {disabled} value = {text}/>
    )
}

