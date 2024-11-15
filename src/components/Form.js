import React, { useState } from 'react'

export default function Form(onAddItems) {
      const[quantity, setQuantity] = useState(1)

      const handleSubmit = (e)=>{
            console.log(e);
            
      }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            console.log(e.target.value);
            
      </select>
    </form>
  )
}
