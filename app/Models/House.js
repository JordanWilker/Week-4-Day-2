
export default class House{
    constructor({levels, bedrooms, bathrooms, year, price, description, imgUrl, _id, id}){
      this.bedrooms = bedrooms
      this.levels = levels
      this.bathrooms = bathrooms
      this.year = year
      this.price = price
      this.description = description
      this.imgUrl = imgUrl
      this.id = _id || id
    }
    
    get Template(){
      return /*html*/`<div class="card col-2">
      <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
      <img class="card-img-top" src="${this.imgUrl}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.year} ${this.levels} Story House</h4>
          <p>${this.bedrooms} Bedroom</p>
          <p>${this.bathrooms} Bathrooms</p>
          <p class="card-text">${this.description}</p>
          <p>Price: $${this.price}</p>
          <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
      </div>
    </div>`
    }
    
    }
    
