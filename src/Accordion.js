import AccordionItem from "./AccordionItem";

export default function Accordion({data}) {
  return (
    <div className="accordion" >
      {
            data.map((e, i) => (
                  <AccordionItem title={e.title} text={e.text} num={i} key={e.title} />
            ))
      }
    </div>
  );
}
