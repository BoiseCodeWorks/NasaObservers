import ApodController from "./Controllers/ApodController.js";


class App {
    constructor() {
        this.controllers = {
            apodController: new ApodController()
        }
    }
}

window['app'] = new App()