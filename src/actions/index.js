/* {
    type: 'ADD_MOVIES',
}

{
    type: 'DECREASE_COUNT',
}

 */

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

//action creators

export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourite(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function showFavourite(val){
    return {
        type: SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url= ` http://www.omdbapi.com/?i=tt3896198&apikey=67372a3a&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie',movie);
            //dispatch an action
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}