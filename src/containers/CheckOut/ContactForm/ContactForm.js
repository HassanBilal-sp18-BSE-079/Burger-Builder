import React, { useState } from 'react';
import Button from '../../../components/CustomButton/CustomButton';
import classes from './ContactForm.module.css';
import axios from '../../../axiosInstance';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';


const ContactForm = (props) => {


    let [loading,setloading] = useState(false);
    let [Name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [street,setStreet] = useState('');
    let [deliveryMethod,setDeliveryMethod] = useState('');
    let [zipCode,setZipCode] = useState('');
    



    let orderbtnHandler = (event)=>{
        event.preventDefault();
        setloading(true);
        const order = {
            ingredients : props.ingredients,
            price : props.price,
            customer: {
                name: Name,
                address:{
                    street:street,
                    zipCode:zipCode
                },
                email:email,
            },
            deliveryMethod:deliveryMethod,
        };
// sending data to firebase
        axios.post('/orders.json',order).then(res=>{
            setloading(false);
            props.history.push('/');
        }).catch(error=>{
            console.log(error);
            setloading(false);
        });


        

    }


    let form = 
        <form className= {classes.form} >
        <input className={classes.input} type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
        <input className={classes.input} type='email' placeholder='Emaiil' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label className={classes.input}  htmlFor='address'>Address</label>
        <input className={classes.input}  type='text' id='address' placeholder='Street' onChange={(e)=>{setStreet(e.target.value)}}/>
        <input className={classes.input}  type='text' id='address' placeholder='Zip code' onChange={(e)=>{setZipCode(e.target.value)}}/>
        <label className={classes.input}  htmlFor='Dilevery'>Address</label>
        <input className={classes.input}  id ='Dilevery' type='text' placeholder='Dilevry Method' onChange={(e)=>{setDeliveryMethod(e.target.value)}}/>
        <Button color='Success' clicked={orderbtnHandler} >Order</Button>
        </form>;



if(loading){
    form = <LoadingSpinner />
}



    return ( 
        <div className={classes.div}>
            <h1>Enter your contact data here please!</h1>
            {form}
        </div>
       
     );
}
 
export default ContactForm;