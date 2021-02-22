import House from "../Models/House.js";
import { ProxyState } from "../AppState.js";



class HousesService{
    constructor(){
        console.log("house service working")

    }
    createHouse(rawHouse){
        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp
    }
    bid(id) {
        let temp = ProxyState.houses
        let car = temp.find(c=> c.id === id)
        car.price += 100
        ProxyState.houses = temp
      }
      deleteHouse(id) {
        let temp = ProxyState.houses
        let carIndex = temp.findIndex(car =>  car.id == id)
        temp.splice(carIndex, 1)
        ProxyState.houses = temp
      }
    
}

export const housesService = new HousesService()