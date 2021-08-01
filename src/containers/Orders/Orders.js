import React, { useEffect, useState } from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';
import axios from '../../axiosInstance';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


const Orders = (props) => {

    let [orders,setOrders] = useState([]);
    let [loading,setLoading] = useState(true);


    useEffect(
        ()=>{
            axios.get('orders.json')
            .then(res=>{

                let order = [];

                for (let key in res.data){
                    order.push({...res.data[key],id:key});
                };
                setOrders(order);

                setLoading(false);

            }).catch(err=> {
                console.log(err);
                setLoading(false);
            });
        },[]
    );


    let order = <LoadingSpinner />;

    if (!loading){
        order= orders.map(order=>{
            return <Order key={order.id} price={order.price} ingredients={order.ingredients} id={order.id} />
        });
    }



    return ( 
        <div className={classes.div}>
            <h1 className={classes.h1}>Orders</h1>
            {order}
        </div>
     );
}
 
export default Orders;