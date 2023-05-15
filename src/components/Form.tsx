import { ChangeEventHandler } from 'react';


type formType= {
    title: string;
    value:string,
    name: string
    controlInput: ChangeEventHandler<HTMLInputElement>
    
  }


export const TextBox = (form : formType) => {
  return (
    <div className="w-8/12">
        <p className="pb-2">{form.title}</p>
        <input type="text" placeholder={form.title} name = {form.name} className="input input-bordered input-primary w-full max-w-xs" onChange= {form.controlInput} value={form.value} />
    </div>
  )
}

