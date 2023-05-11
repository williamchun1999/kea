
type MainTitleProp = {
    text: string;
    color: string;
  }

  
export const MainTitle = (design: MainTitleProp) => {
  console.log(design.text , design.color)
  return (
    <div className="font-bold tracking-widest ml-20 text-3xl pt-6">
        <h2 className= {`first-letter:text-5xl first-letter:text-primary`} >Keep</h2>
        <h2 className= {`first-letter:${design.text} first-letter:${design.color} pl-12 pt-2`}>Each other</h2>
        <h2 className= {`first-letter:${design.text} first-letter:${design.color}`}>Accountable</h2>
    </div>
  )
}
