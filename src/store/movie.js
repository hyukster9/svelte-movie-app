import axios from "axios";
import { writable, get } from "svelte/store";
import _unionBy from "lodash/unionBy";

export const movies = writable([]);
export const loading = writable(false);
export const theMovie = writable({});
export const message = writable('Search for the Movie Title')

export function initMovieList(){
    movies.set([])
    message.set('Search for the Movie Title')
    loading.set(false)
}

export async function searchMovies(payload) {
    if (get(loading)) return
    loading.set(true)
    try{
        const res = await _fetchMovie({...payload, page:1 })
        const { Search, totalResults } = res.data
        movies.set(Search)
        const pageLength = Math.ceil(totalResults / 10);
        movies.update(($movies) => _unionBy($movies, Search, "imdbID"));
        if(pageLength > 1) {
            for (let page = 2; page <= pageLength; page += 1) {
                if (page > payload.number / 10) break
                const res = await _fetchMovie({...payload, page})
                const { SearchList } = res.data
                movies.update(($movies) => _unionBy($movies, SearchList, "imdbID"))
            }
        }
        loading.set(false)
    }catch (msg) {
        movies.set([])
        message.set(msg)
        loading.set(false)
        return
    }
}

export async function searchMovieWithId(id) {
    if (get(loading)) return
    loading.set(true)
    const res = await _fetchMovie({id:id})
    theMovie.set(res.data)
    loading.set(false)
}

function _fetchMovie(payload){
    const { title, type, year, number, page, id } = payload
    const OMDB_API_KEY = "d410c605"

    const url = id
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(url)
            console.log(res.data);
            if(res.data.Error) {
                reject(res.data.Error)
            }
            resolve(res);
        } catch (e) {
            console.log(e.response.status)
            reject(e.message)
        }
    })
}
