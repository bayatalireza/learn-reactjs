
import Accordion from "./Accordion"


const faqs = [
  {
    title: "where are these chairs assembled?",
    text: "Check each product page for other buying options. Price and other details may vary based on product size and color."
  },
  {
    title: "How long do i have to return my chair?",
    text: "You can exchange any product in your order up to 30 days after delivery. Shipping on your first exchange for any item is free of charge."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "As soon as you buy a product from a non-EU country, then effectively you become an importer and become liable to Customs and Excise Duty as well as Value"
  }
]

function App() {

  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
