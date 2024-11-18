import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({data}) {
const [curOpen, setCurOpen] = useState(null)


  return (
    <div className="accordion" >
      {
            data.map((e, i) => (
                  <AccordionItem title={e.title} num={i} key={e.title} curOpen={curOpen} onCurOpen={setCurOpen} >
                    {e.text} 
                  </AccordionItem>
            ))
      }
    </div>
  );
}
