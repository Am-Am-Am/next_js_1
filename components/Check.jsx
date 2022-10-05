import s from '../styles/check.module.css';

export default function Check({checked, disabled, label, id}){
    return (
        <div>
            <input type="checkbox" class={s.input} id={id} checked = {checked} disabled = {disabled}/><label for={id}>{label}</label>
        </div>
    )
}
