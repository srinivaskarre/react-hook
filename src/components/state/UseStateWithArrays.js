import React, { useState } from 'react'

function UseStateWithArrays() {
    const [items,setItems] = useState([])

    const addItem = () =>{
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random()*10)+1
            }
        ])
    }
    return (
        <div>
            <button onClick={addItem}> Add Item</button>
            {items.map((item,index) => <li key={index}><h1>{item.value}</h1></li>)}
        </div>
    )
}

export default UseStateWithArrays
