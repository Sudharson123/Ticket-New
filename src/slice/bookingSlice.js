import { createSlice } from "@reduxjs/toolkit";

const init={BookingDetails:{amount:"",seat:""},username:"",photo:""}

const booking=createSlice({
    name:"Booked",
    initialState:init,
    reducers:{
      update(state,action){
        state.BookingDetails.seat=action.payload[1]
        state.BookingDetails.amount=action.payload[0]
      },
      adduser(state,action){
        state.username=action.payload
      },
      addphoto(state,action){
        state.photo=action.payload
      }
    }
})
export const {update,adduser,addphoto}=booking.actions
export default booking.reducer