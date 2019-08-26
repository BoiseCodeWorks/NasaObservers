import ApodService from "../Services/ApodService.js";

//Private
let _apodService = new ApodService()

function draw() {
    let pic = _apodService.Picture
    document.getElementById("picture").innerHTML = pic.Template
}


//Public
export default class ApodController {
    constructor() {
        debugger
        //NOTE Register all subscribers
        _apodService.addSubscriber("picture", draw) //NOTE methods are pass unenvoked


        //NOTE Retrieve Data
        _apodService.getAPOD()

    }

}