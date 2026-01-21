import './Checkbox.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Checkbox = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        isRequired,
    } = props

    return (
        <label
            className={classNames(className, 'checkbox')}
            htmlFor={id}
        >
            <input
                className='checkbox__input'
                type='checkbox'
                id={id}
                required={isRequired}
            />
            <span className="checkbox__label">
                {label || (<>Согласен на обработку <span className="accent">персональных данных</span></>)}
            </span>
        </label>
    )
}

export default Checkbox