import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, PROCESS_PAYMENT_ANY_BANK_CARD } from './blogConstants.jsx'

const initialState = {
	data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
	pdata: { cardNumber: '' },
	error: ''
}

export default function blog(state = initialState, action) {
	switch (action.type) {
	case GET_POSTS_SUCCESS:
		return { ...state, data: action.posts, error: '' };

	case GET_POSTS_ERROR:
		return { ...state, error: action.error };

		case PROCESS_PAYMENT_ANY_BANK_CARD:
			return {...state, pdata: action.r }

	default:
		return state;
	}
}