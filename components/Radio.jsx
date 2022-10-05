import s from '../styles/radio.module.css';

export default function Radio({checked, disabled, text, id}){
    return (
        <div>
            <input type="radio" class={s.input} id={id} checked = {checked} disabled = {disabled}/><label for={id}>{text}</label>
        </div>
    )
}

