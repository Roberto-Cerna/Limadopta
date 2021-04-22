
import React from 'react'
import {Button,Col,Form} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default function AdoptNew(){

    const [formSubmitted,setFormSubmitted] = useState(false)
    const [title,setTitle] = useState("")
    const [namePet,setNamePet] = useState('')
    const [age,setAge] = useState(0)
    const [nameUser,setNameUser] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')

    const handleChangeTitle = (event)=> setTitle(event.target.value)
    const handleChangeNamePet = (event)=> setNamePet(event.target.value)
    const handleChangeAge = (event)=> setAge(event.target.value)
    const handleChangeNameUser = (event)=> setNameUser(event.target.value)
    const handleChangeAddress = (event)=> setAddress(event.target.value)
    const handleChangeCity = (event)=> setCity(event.target.value)
    const handleChangeState = (event)=> setState(event.target.value)

const formData = {
    title: title,
    namePet: namePet,
    age: age,
    nameUser: nameUser,
    address: address,
    city: city,
    state: state
}
const handleSubmit =(event) =>{
    event.preventDefault()
    axios.post('http://localhost:8080/adopt', {formData})
    setFormSubmitted(true)
}

    return (  <div className = "container">
      {formSubmitted ?  <Redirect to="/adopt" /> : 
     
<Form onSubmit={handleSubmit}>
    <Form.Group controlId="title">
    <Form.Label>Título</Form.Label>
    <Form.Control placeholder="Se busca hogar para..."  onChange={handleChangeTitle } />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col}  controlId="namePet">
      <Form.Label>Nombre de la Mascota</Form.Label>
      <Form.Control onChange={handleChangeNamePet } />
    </Form.Group>
    <Form.Group as={Col} sm={2} controlId="age">
      <Form.Label>Edad de la Mascota</Form.Label>
      <Form.Control as="select" defaultValue="0" onChange={handleChangeAge}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}  controlId="nameUser">
      <Form.Label>Nombre del propietario</Form.Label>
      <Form.Control onChange={handleChangeNameUser} />
    </Form.Group>
    
  </Form.Row>

  <Form.Group controlId="address">
    <Form.Label>Dirección De Entrega</Form.Label>
    <Form.Control onChange={handleChangeAddress}/>
  </Form.Group>

   

  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label>Ciudad</Form.Label>
      <Form.Control onChange={handleChangeCity}/>
    </Form.Group>

    

    <Form.Group as={Col} controlId="state">
      <Form.Label>Provincia</Form.Label>
      <Form.Control onChange={handleChangeState} />
    </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit" onSubmit={handleSubmit}>
    Submit
  </Button>
</Form>}
</div> 
    )
}