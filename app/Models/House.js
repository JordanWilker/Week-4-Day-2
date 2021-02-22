import {generateId} from "../Utils/GenerateId.js"


export default class House{
    constructor({bedrooms, bathrooms, levels, imgUrl, year, price, description}){
        this.bedrooms= bedrooms,
        this.bathrooms = bathrooms,
        this.levels = levels
        this.imgUrl = imgUrl
        this.year = year,
        this.price = price,
        this.description = description
        this.id = generateId()

    }

    get Template(){
        return /*html*/ ` <div class="col-2 card">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')"aria-hidden="true"></i>
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.year} ${this.levels} Story House </h4>
            <p class="card-text">${this.description}</p>
            <p>Bedrooms: ${this.bedrooms}</p>
            <p>Bathrooms: ${this.bathrooms}</p>
            <p>Price: ${this.price}</p>
            <button class="btn btn-success"onclick="app.housesController.bid('${this.id}')">Bid</button>
        </div>
        </div>

            
        `
    }
}