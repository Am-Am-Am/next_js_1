import Radio from './Radio'
import s from '../styles/radioBox.module.css';

export default function RadioBox({text ,checked}){
    return (
        <div className={s.RadioBox}>
            <Radio checked={checked}></Radio>
            <p>{text}</p>
        </div>
    )
}

