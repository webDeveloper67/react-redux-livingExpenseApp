import {SET_ALERT} from './types';
import uuid from 'uuid';

export const handleAlert = (text, alertType) => {
	const id = uuid.v4();
	return {
		type: SET_ALERT,
		payload: {
			alertType,
			text,
			id
		}
	};
};
