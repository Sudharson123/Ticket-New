import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { add, remove,current} from "./slice/checkoutSlice";

function Seats() {
  const seat = useSelector((state) => state.seats);
  const check=useSelector((state)=>state.ticketbook.curr)
  const ticketDetails=useSelector((state)=>state.ticketbook.chairno)
   const [error,setError]=useState(false)
  // const[setter,setSett]=useState(false)
  const nav=useNavigate()
  const obj = {
    0: "A",
    24: "B",
    30: "C",
    54: "D",
    78: "E",
    102: "F",
    126: "G",
    150: "H",
    174: "I",
    180: "J",
    204: "K",
    228: "L",
    252: "M",
    276: "N",
  };
  const [getter,setGetter]=useState([])
   
  const dispatch = useDispatch();
  let inref = useRef();
  const sett = (inn) => {
    const currseat = inn.target.value;
    console.log(currseat)
    const checkcolor = inn.target.style.backgroundColor;
    if (!checkcolor) {
      inn.target.style.backgroundColor = "black";
      dispatch(add(Number(currseat)));
      setGetter([...getter,currseat])
    } else {
      inn.target.style.backgroundColor = "";
      dispatch(remove(Number(currseat)));
    }
 
  };
 
  return (
    <div className="length">
       <div className="container">
      <div className="confirmseats">
        <button onClick={() => {
          const a=Object.keys(ticketDetails).length
          if(!a){
            setError(true)
          }
          else{
            nav("/popup")
            for(let i=0;i<getter.length;i++){
              dispatch(current(Number(getter[i])))
            }
          }
      }}>Confirm Seats</button>
      </div>
      {error&&<div>
        <h1 style={{marginLeft:"250px"}}>Seats haven't selected</h1>
        </div>}
      <div>
        <>
        <h3 className="price">Upper : &#8377;200</h3>
        </>
        {seat.upper.map((item, ind) => {
          
          if (obj[ind]) {
            
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "17px",
                  marginTop: "-20px",
                  fontWeight: "bolder",
                }}
              >
                {obj[ind]}
              </button>
            );
          } else {
            if(localStorage.getItem(ind)){
              return(
              <button className="seat" style={{backgroundColor: "#04D010",border:'2px solid black'}}>
              </button>
              )
           }
           else{
            return (
              <button
                ref={inref}
                value={ind}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat" style={check[ind]?{backgroundColor:"black"}:{}}
              ></button>
            );
           }
            
          }
        })}
        <hr></hr>
      </div>

      <div>
      <h3 className="price">Middle : &#8377;130</h3>
        {seat.middle.map((item, ind) => {
          let index = 30 + ind;
          if (obj[index]) {
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "18px",
                  fontWeight: "bolder",
                }}
              >
                {obj[index]}
              </button>
            );
          } else {
            if(localStorage.getItem(index)){
              return(
              <button className="seat" style={{backgroundColor: "#04D010",border:'2px solid black'}}>
              </button>
              )
           }
           else{
            return (
              <button
                ref={inref}
                value={index}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat" style={check[index]?{backgroundColor:"black"}:{}}
              ></button>
            );
           }
          }
        })}
        <hr></hr>
      </div>

      <div>
      <h3 className="price">Lower : &#8377;60</h3>
        {seat.lower.map((item, ind) => {
          let index = 180 + ind;
          if (obj[index]) {
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "18px",
                  fontWeight: "bolder",
                }}
              >
                {obj[index]}
              </button>
            );
          } else {
            if(localStorage.getItem(index)){
              return(
              <button className="seat" style={{backgroundColor: "#04D010",border:'2px solid black'}}>
              </button>
              )
           }
           else{
            return (
              <button
                ref={inref}
                value={index}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat" style={check[index]?{backgroundColor:"black"}:{}}
              ></button>
            );
           }
          }
        })}
      </div>
     
    </div>
    </div>
   
  );
}

export default Seats;
