const initialState = {
	contacts: []
};

export const ContactReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [ ...state.contacts, action.payload ]
			};
		default:
			return state;
	}
};
