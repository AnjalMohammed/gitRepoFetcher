const initialState = {
    gitResult: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_GIT_DATA':
            return Object.assign({}, state, {
                gitResult: action.payload,
            });

        default: return state;
    }
};
