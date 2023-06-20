import { ChangeEventHandler } from 'react';


type formType= {
    title: string;
    value:string,
    name: string
    controlInput: ChangeEventHandler<HTMLInputElement>
    type:string
    disabled?: boolean
  }


export const TextBox = (form : formType) => {
  return (
    <div className="w-full flex flex-col items-center">
        <p className="pb-2">{form.title}</p>
        <input type={form.type} placeholder={form.title} name = {form.name} className="input input-bordered input-primary w-full max-w-xs" onChange= {form.controlInput} value={form.value} disabled= {form.disabled && true }/>
    </div>
  )
}

