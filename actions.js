import types from './action-types';
import networkClient from '../network/network-client';

export function setWatches (watches) {
    return {type: types.SET_watches, payload: watches}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function addbrand(watches){
    return {type: types.ADD_brand_watches, payload: watches};


export function removebrand(index){
    return {type: types.REMOVE_brand_watches, payload: index};
}

export const getwatches = () => async dispatch => {

  
};


export function setMdestches (watches) {
    return {type: types.MD_SET_watches, payload: watches}
}

export function setCurrentPage (page) {
    return {type: types.SET_CURRENT_PAGE, payload: page}
}

export function setTotalPages (pages) {
    return {type: types.SET_TOTAL_PAGES, payload: pages}
}

export const getMdTopRatedwatches = () => async dispatch => {
    try {
        const response = await networkClient.get(
         "movie/top_rated");
        dispatch(setMdwatches(response.results));
        dispatch(setTotalPages(response.total_pages));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const getMdQuartz  = params => async dispatch => {
    try {
        const response = await networkClient.get(
         "Quartz /watches", params);
        dispatch(setMdwatches(response.results));
        dispatch(setTotalPages(response.total_pages));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};


export function setwatchesDetails (watches) {
    return {type: types.SET_WATCHES_DETAILS, payload: watches}
}

export const getwatchesDetails = id => async dispatch => {
    try {
        const response = await networkClient.get(
         `watches/${id}`);
        dispatch(setwatchesDetails(response));
    } catch(ex) {
            dispatch(setError({message: 'There was an error!'}))
    };
