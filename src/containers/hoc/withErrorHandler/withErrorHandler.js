import React, { useEffect, useState } from 'react';
import Model from '../../../components/Model/Model';

const withErrorHandler = (WrappedComponent,axios)=>{

    return (props)=>{

        let [error,setError] = useState(null);


        const reqInterceptor = axios.interceptors.request.use(req=>{
            setError(null);
            return req;
        });
        
        const resInterceptor= axios.interceptors.response.use(res=>res,error=>{
            setError(error);
        });

// useEffect return func runs for cleanup in the end when component unmounts
        useEffect(()=>{

         return ()=>{
             axios.interceptors.request.eject(reqInterceptor);
             axios.interceptors.response.eject(resInterceptor);
         }

        } ,[reqInterceptor,resInterceptor]);


        let errorCancelhandler= ()=>{
            setError(null);
        };




        return(

            <React.Fragment>
            <Model view={error} disappearbackground={errorCancelhandler} >
                {error ? error.message:null}
            </Model>
            <WrappedComponent {...props} />
            </React.Fragment>

        )

    }


}

export default withErrorHandler;