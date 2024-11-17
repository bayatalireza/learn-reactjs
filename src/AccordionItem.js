import { useState } from "react"

export default function AccordionItem({num, title, text}){
      const [isOpen, setIsOpen] = useState(false)

      const handleToggle = ()=>{
            setIsOpen(!isOpen)  // toggle isOpen state
      }

      return(
            <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle} >
                  <p className='number'>{num <= 9 ? `0${num+1}` : (num+1) }</p>
                  <p className='title'>{title}</p>
                  <p className='icon' >{isOpen ? "-" : "+"}</p>
                  {isOpen && <div className='content-box'>{text}</div>}
            </div>
      )
}