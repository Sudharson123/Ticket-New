import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {update} from "./slice/bookingSlice";
import { reset} from "./slice/checkoutSlice";



function Popup() {
  const check=useSelector((state)=>state.ticketbook.curr)
    const ticketDetails=useSelector((state)=>state.ticketbook.chairno)
    const ticketNumbers=Object.keys(ticketDetails).length
    const values=Object.values(ticketDetails)
    const nav=useNavigate()
    let givetickets=""
    const dispatch=useDispatch()
    let tot=0
    const[back,setBack]=useState(false)
      const [minutes, setMinutes] = useState(1);
      const [seconds, setSeconds] = useState(59);
     
      useEffect(() => {
        const interval = setInterval(() => {
          const clear=()=>{
            return ()=>clearInterval(interval)
          }
          if(!seconds){
                  let min=minutes-1
              if(min<0){
                setBack(true)
                setMinutes(0)
                setSeconds(0)
                clear()
              }
              else{
                setMinutes(min)
                setSeconds(59)
              
              }
          }
        
          else if(seconds){
              setSeconds(seconds-1);  
          }  
        }, 1000);
        
        return () => clearInterval(interval);
       
      });
    
    for(let i=0;i<values.length;i++){
      if(i===values.length-1){
        givetickets+=values[i][0]
      }
      else{
        givetickets+=values[i][0]+","
      }
       
    }
    
    for(let i=0;i<values.length;i++){
       
        tot+=Number(values[i][1])
    }
    dispatch(update([tot,givetickets]))
  return (
    <>
    
    {!back && <div className='timer'>
      <h1 style={{color:'white',fontSize:'30px',fontFamily:"cursive"}}>Expires Within</h1>
      <h1>{"0"+minutes} :</h1>
      <h1>{seconds<10?"0"+seconds:seconds}</h1>
    </div>}
    {back && <div>
      <h2 style={{color:'white',fontSize:'35px'}}>Time Expired !!!! Book Again</h2>
      </div>}
     <div className='popup'>
      
      <h2>! Confirmation !</h2>
      <h4>You Booked {ticketNumbers} tickets</h4>
      <h4>Your Seats are {givetickets} </h4>
      <h3>Total : &#8377;{tot}</h3>
      {!back && <button className='continue' onClick={()=>{
        nav("/details")
        const confirmedseats=Object.keys(check)
        confirmedseats.map(item=>localStorage.setItem(item,true))
        
    }}>Continue</button>}
    {
      back && <button className='continue' onClick={()=>{
        nav("/seats")
        dispatch(reset())
    }}>Back</button>
    }
   </div>
    </>
   
  )
}

export default Popup