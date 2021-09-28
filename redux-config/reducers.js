const initialState = { userData : [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeUserData':
        let data = [...state.userData, ...action.payload];
      return { ...state, userData: data };
    default:
      return state;
  }
};