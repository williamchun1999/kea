
type MainTitleProp = {
    text: string;
    color: string;
  }

  
export const MainTitle = (design: MainTitleProp) => {
  console.log(design.text , design.color)
  return (
    <div className="font-bold tracking-widest ml-20">
        <h2 className= {`first-letter:${design.text} first-letter:${design.color}`} >Keep</h2>
        <h2 className= {`first-letter:${design.text} first-letter:${design.color} pl-12`}>Each other</h2>
        <h2 className= {`first-letter:${design.text} first-letter:${design.color}`}>Accountable</h2>
    </div>
  )
}
