//Importing the Dispatch type from the redux library.
import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';

export const dummyAction = (term: string) => {
	//Create a function that takes a dispatch parameter
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DUMMY_TYPE,
			payload: term,
		});
	};
};
