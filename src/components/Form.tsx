type formType= {
    title: string;
    value:string,
    name: string
    
  }


export const TextBox = (form : formType) => {
  return (
    <div className="m-auto w-8/12">
        <p className="pb-2">{form.title}</p>
        <input type="text" placeholder={form.title} name = {form.name} className="input input-bordered input-primary w-full max-w-xs" onChange= {form.controlInput} value={form.value} />
    </div>
  )
}

