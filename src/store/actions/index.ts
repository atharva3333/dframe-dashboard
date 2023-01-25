import {ActionType} from '../action-types';

//Creating an interface called Action.
interface DummyAction {
	//This interface has two properties: type and payload.
	type: ActionType.DUMMY_TYPE;
	payload: any;
}
interface DummyAction2 {
	//This interface has two properties: type and payload.
	type: ActionType.DUMMY_TYPE;
	payload: any;
}

export type Action = DummyAction | DummyAction2;
