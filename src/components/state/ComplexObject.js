import React, { useState } from 'react'

function ComplexObject() {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
    return (
        <div>
            <form>
                {/* this causes value overridning issue becuase it doesnot work like setState in class comp */}
                {/* <input type='text'
                value = {name.firstName}
                onChange = {(e)=>{setName({firstName: e.target.value})}}/>
                <input type='text'
                value = {name.lastName}
                onChange = {(e)=>{setName({lastName: e.target.value})}}/> */}

                <input type='text'
                value = {name.firstName}
                onChange = {(e)=>{setName({...name,firstName: e.target.value})}}/>
                <input type='text'
                value = {name.lastName}
                onChange = {(e)=>{setName({...name,lastName: e.target.value})}}/>

                <h1>First name is- {name.firstName}</h1>
                <h1>LastName is - {name.lastName}</h1>
                <h2> Object {JSON.stringify(name)} </h2>
            </form>
        </div>
    )
}

export default ComplexObject
