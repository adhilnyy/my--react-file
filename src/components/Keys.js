import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

const products = [{id:1, name: "laptop",brand: "macBook",qty: 1},{id:2, name: "laptop",brand: "sony",qty: 1},{id:3 ,name: "laptop",brand: "dell",qty: 1}]

const Keys = () => {
    const [items, setItem] = useState(products)
    const changeQty = (id) => {
        const newItem = items.map((item) => item.id === id ? {...item, qty: item.qty + 1}:item)
        setItem(newItem)
    }
    return (
        <div>
            {items.map((product) => (
                <div className='bg-success text-white m-2' key={product.id}>
                    <h1>{product.name}</h1>
                    <h3>Brand : {product.brand}</h3>
                    <h4>Qty :{product.qty}</h4>
                    <Button onClick={()=> changeQty(product.id)}>+</Button>


                 </div>
            )
            ) }

       
         </div> 
  )
}

export default Keys