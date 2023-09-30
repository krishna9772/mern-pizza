import React , {useState} from 'react';
import pizzas from '../pizzas-data'

export default function Pizza({pizza}) {
    const[quantity,setquantity] = useState(1)
    const[varient,setvarient] = useState('small');
    return (
        <div style={{margin: '70px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{height: '200px', width: '200px'}}/>

            <div className="flex-container">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => {setvarient(e.target.value)}}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => {setquantity(e.target.quantity)}}>
                       {[...Array(10).keys()].map((x,i) => {
                            return <option value={i+1}>{i+1}</option>
                       })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-2">Price : {pizza.prices[0][varient] * quantity}</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="mt-1 btn btn-danger">Add to Cart</button>
                </div>

            </div>
        </div>
    )
}