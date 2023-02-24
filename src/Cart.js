import React, { useState } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import {PhoneData} from './Product.data'


const Cart = () => {
    const [items,setItem] = useState(PhoneData)
    const decQty = (id) => {
        const newItem = items.map((item)=>
        item.id === id && item.qty>1 ?{...item,qty:item.qty-1}:item)
        setItem(newItem)
        
    }
    const icQty = (id) => {
        const newItem = items.map((item)=>
        item.id === id && item.qty<9 ?{...item,qty:item.qty+1}:item)
        setItem(newItem)
        
    }

  return (
    <div>
        <Container>
        <h1 className='bg-info text-white'>Products</h1>
        {items.map((item) =>( 
        <div className='d-inline-flex' key={item.id} >
        <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '12rem' }}>
      <Card.Img variant="top" className='p-1' style={{ height: '15rem' }} src={require(`/home/afra/Desktop/my/src/components/${item.image}.png`)} />
      <Card.Body>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <h5>Price:{item.price}</h5>
        <div>
            <p>Qty:
        <Button onClick={()=>decQty(item.id)} className='m-1'>-</Button>{item.qty}
        <Button onClick={()=>icQty(item.id)} className='m-1'>+</Button>
        </p>
        </div>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
    ) )}
     
       

        
        </Container>

    </div>
  )
}

export default Cart