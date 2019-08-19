import { types } from '../actions/actions';

const initialState = {
    trailer: null,
    searchResult: [],
    selectedMovie: {},
    error: null,
    query:'',
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SEARCH_MOVIE_SUCCESS:

            return {
                ...state,
                searchResult: action.payload
            };

        case types.SEARCH_MOVIE:

        return {
            ...state,
            query: action.payload
        };

        case types.GET_MOVIE_DETAILS_SUCCESS:

            return {
                ...state,
                selectedMovie: action.payload,
                error: null
            };

        case types.GET_MOVIE_TRAILER:

            return {
                ...state,
                trailer: action.payload,
                error: null
            };

        default:
            return state;
    }
};

export default moviesReducer; 