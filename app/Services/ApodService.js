import Picture from "../models/Picture.js";


//Private
let _state = {
    /**
     * @typedef Picture
     */
    picture: new Picture({ hdurl: "//placehold.it/200x200" }),
    rover: ''
}

// NOTE An subscriber for each property of the state that is watched
// Observer values are always arrays of Functions
let _subscribers = {
    picture: [],
    rover: []
}

//NOTE setState will change the value in the state, then run all the functions that are watching that value
function _setState(prop, value) {
    _state[prop] = value //NOTE This sets the value in the state
    _subscribers[prop].forEach(fn => fn()) // NOTE for every function, run it
}


// @ts-ignore
let _nasaApi = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=Trq8EGLRbZZWwRVqYUNWkinr4ulR2Ajlgh5qRPoV"
})


//Public
export default class ApodService {
    addSubscriber(prop, fn) {
        //NOTE adds subscriber to list of functions to run on change
        _subscribers[prop].push(fn)
    }
    get Picture() {
        return _state.picture
    }

    getAPOD() {
        _nasaApi.get()
            //NOTE 'then' runs on successful return of the data
            .then(res => {
                //NOTE Axios puts all info from API into '.data'
                let pic = new Picture(res.data)
                _setState("picture", pic)
            })
    }

}
