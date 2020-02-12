import {combineReducers} from "redux";
import types from "./Quartz watches-types";

function watches(state = [], Quartz ) {
    switch (Quartz .type) {
        case types.SET_Watches: {
            return [...Quartz .payload];
        }

        default:
            return state;
    }
}

function brand (state=[], Quartz ){
    switch (Quartz .type) {
        case types.ADD_brand: {
            return [...state, Quartz .payload];
        }
        case types.REMOVE_brand: {
            state.splice(Quartz .payload, 1)
            return [...state];
        }
        default:
            return state;
    }
}

function error(state = {}, Quartz ) {
    switch (Quartz .type) {
        case types.SET_ERROR: {
            return {...Quartz .payload};
        }
        default:
            return state;
    }
}



function watchesDatabasewatches(state = [], Quartz ) {
    switch (Quartz .type) {
        case types.MD_SET_watches: {
            return [...Quartz .payload];
        }

        default:
            return state;
    }
}

function watchesDetails(state = {}, action) {
    switch (brand.type) {
        case types.SET_watches_DETAILS: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

function currentPage(state = 1, action) {
    switch (brand.type) {
        case types.SET_CURRENT_PAGE: {
            return action.payload;
        }
        default:
            return state;
    }
}

function totalPages(state = 0, action) {
    switch (action.type) {
        case types.SET_TOTAL_PAGES: {
            return action.payload;
        }
        default:
            return state;
    }
}


export default combineReducers({
    watches, 
    brand, 
    error, 
    watchesDatabasewatches, 
    watchesDetails,
    currentPage,
    totalPages
});