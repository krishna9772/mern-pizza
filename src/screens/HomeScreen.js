import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../pizzas-data';
export default function HomeScreen(){
    return (
        <div>
            <div className="row">
                {pizzas.map(pizza => {
                return <div className = "col-md-4">
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                })}
            </div>
        </div>
    )
}