import {ChangeEvent , ForwardedRef,forwardRef} from 'react'
import classes from './Input.module.scss'
interface InputProp {
  label?: string;
  id: string;
  type?: string;
  placeHolder?: string;
  describedby?: string;
  value?:string
  isValid?: boolean
  isValidMessage?: string
  onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

function Input({
  label,
  id,
  type = "text",
  placeHolder,
  describedby,
  isValidMessage,
  isValid = false,
  ...props
}: InputProp,ref:ForwardedRef<HTMLInputElement>) {
  return (
    <div className="mb-3 m-t-10 ">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${isValid ? "" : `is-invalid`}`}
        id={id}
        aria-describedby={describedby}
        placeholder={placeHolder}
        ref={ref}
        {...props}
      />
      {!isValid && isValidMessage &&
      <div className="invalid-feedback">
        {isValidMessage}
      </div>}
    </div>
  );
}

export default forwardRef(Input);
