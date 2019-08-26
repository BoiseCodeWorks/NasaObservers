export default class Value {
    constructor(data) {
        this.hdurl = data.hdurl
    }

    get Template() {
        return `
        <img src="${this.hdurl}" /> 
        `
    }
}