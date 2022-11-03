import {createSlice}  from '@reduxjs/toolkit';

const initial={chairno:{},trigger:false,Seatno:0,curr:{}}


const checkout=createSlice({
    name:"bill",
    initialState:initial,
    reducers:{
    add(state,action){
        let seat=""
        let price=0
        // console.log(Boolean(action.payload))
        switch (true) {
            case (action.payload<24):
                seat=`A-${action.payload}`
                price=200
                break;
            case (action.payload>=24 && action.payload<30):
                seat=`B-${action.payload}`
                price=200
                break;
                case (action.payload>=30 && action.payload<54):
                seat=`C-${action.payload}`
                price=130
                break;
                case (action.payload>=54 && action.payload<78):
                seat=`D-${action.payload}`
                price=130
                break;
                case (action.payload>=78 && action.payload<102):
                seat=`E-${action.payload}`
                price=130
                break;
                case (action.payload>=102 && action.payload<126):
                seat=`F-${action.payload}`
                price=130
                break;
                case (action.payload>=126 && action.payload<150):
                seat=`G-${action.payload}`
                price=130
                break;
                case (action.payload>=150 && action.payload<174):
                seat=`H-${action.payload}`
                price=130
                break;
                case (action.payload>=174 && action.payload<180):
                seat=`I-${action.payload}`
                price=130
                break;
                case (action.payload>=180 && action.payload<204):
                seat=`J-${action.payload}`
                price=60
                break;
                case (action.payload>=204 && action.payload<228):
                seat=`K-${action.payload}`
                price=60
                break;
                case (action.payload>=228 && action.payload<252):
                seat=`L-${action.payload}`
                price=60
                break;
                case (action.payload>=252 && action.payload<276):
                seat=`M-${action.payload}`
                price=60
                break;
                case (action.payload>=276 && action.payload<310):
                seat=`N-${action.payload}`
                price=60
                break;
            default:
                break;
        }
        state.chairno[action.payload]=[seat,price]

    },
    remove(state,action){
        if(state.chairno[action.payload]){
            delete state.chairno[action.payload]
        }
    },
    trig(state){
        if(Object.keys(state.chairno).length>0){
            state.trigger=true
        }
        
    },
    Chairno(state,action){
        state.Seatno=action.payload
    },current(state,action){
        state.curr[action.payload]=true
    },reset(state){
        state.curr={}
    }
    }
})
export const {add,remove,trig,Chairno,current,reset}=checkout.actions
export default checkout.reducer