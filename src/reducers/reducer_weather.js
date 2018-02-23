import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type){
	case FETCH_WEATHER:
		//state.concat is cool. it concatinates on to the old array to keep it going without 
		//resetting it every time.
		//return state.concat([action.payload.data]);
		//NOTE: YOU NEVER WANT TO MANIPULATE STATE WHEN ADDING TO AN ARRAY.
		return [ action.payload.data, ...state ];
	}
	return state;
}