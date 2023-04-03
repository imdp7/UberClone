import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	origin:null,
	destination:null,
	travelTimeInformation:null,
	ride:null,
	payment:null,
}

export const navSlice = createSlice({
	name:'nav',
	initialState,
	reducers: {
		setOrigin: (state,action) => {
		  state.origin = action.payload;
		},
		setDestination: (state,action) => {
			state.destination = action.payload;
		      },
		setTravelTimeInformation: (state,action) => {
		  state.travelTimeInformation = action.payload;
		},
		setRide:(state,action) => {
			state.ride = action.payload;
		},
		setPayment: (state,action) => {
			state.payment = action.payload;
		}
	},
});

export const { setOrigin, setDestination, setTravelTimeInformation, setPayment,setRide } = navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectPayment = (state) => state.nav.payment;
export const selectRide = (state) => state.nav.ride;

export default navSlice.reducer;