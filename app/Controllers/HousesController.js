import { ProxyState } from "../AppState.js"
<<<<<<< HEAD
import { housesService } from "../Services/HousesService.js"

  function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house=> template += house.Template)
    // console.log(template)
    document.getElementById('houses').innerHTML = template
    console.log(ProxyState.houses)
  }

export default class HousesController{
  constructor(){
    //console.log("houses controller working")
    //console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouse(event){
    event.preventDefault();
    console.log('creating house')
    let form = event.target
    //console.log(form)
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      levels: form.levels.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    console.log("house creator")
    housesService.createHouse(rawHouse)
  }

  bid(id){
    console.log('bidding ' + id)
    housesService.bid(id)
  }

  deleteHouse(id){
    console.log(id)
    housesService.deleteHouse(id)
  }

=======
import {housesService} from "../Services/HousesServices.js"


function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(car=> template += car.Template)

    document.getElementById("houses").innerHTML = template

}

export default class HousesController{
    constructor(){
        ProxyState.on("houses", _draw)
        _draw()
    }
    
    createHouse(event){
        event.preventDefault();
        console.log('creating house')
        let form = event.target
        console.log(form)
        let rawHouse = {
          bedrooms: form.bedrooms.value,
          bathrooms: form.bathrooms.value,
          levels: form.levels.value,
          imgUrl: form.imgUrl.value,
          year:form.year.value,
          price: parseFloat(form.price.value),
          description: form.description.value
         
        }
        console.log(rawHouse)
        housesService.createHouse(rawHouse)
      }
      bid(id){
        console.log('bidding ' + id)
        housesService.bid(id)
      }
      deleteHouse(id){
        console.log(id)
        housesService.deleteHouse(id)
      }
>>>>>>> a7121bd2161da285494fa70ed57ae465d8c135c7
}