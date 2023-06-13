import { ChangeEventHandler } from 'react';


type formType= {
    title: string;
    value:string,
    name: string
    controlInput: ChangeEventHandler<HTMLInputElement>
    type:string
  }


export const TextBox = (form : formType) => {
  return (
    <div className="w-full md:w-96 flex flex-col items-center">
        <p className="pb-2">{form.title}</p>
        <input type={form.type} placeholder={form.title} name = {form.name} className="input input-bordered input-primary w-full max-w-xs" onChange= {form.controlInput} value={form.value} />
    </div>
  )
}

