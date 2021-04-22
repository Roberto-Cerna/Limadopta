import { useEffect, useState } from "react";
import Order from "../Order";
import axios from 'axios'


export default function Adopt(){
    const [allOrders, setAllOrders] = useState([])
    useEffect(()=>{
        async function fetchData(){
            await axios.get('http://localhost:8080/adopt')
            .then((res)=>{
                setAllOrders(res.data)
                console.log(res.data)
            })}
        fetchData()
    },[])

    return (
            <div className='container '> 
                <div className='row row-cols-3'>
                   {allOrders.map((order,index)=>
                       (<div className="col mt-5" key={index}>
                           <Order   
                                title = {order.title}
                                namePet = {order.namePet}
                                age = {order.age}
                                address = {order.address}
                                city = {order.city}
                                state = {order.state}
                           />
                       </div>)
                   )}
                </div>   
            </div>)
}