import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService{

 
  constructor(){
    //console.log("houses service");
    this.getHouses()
  }

  async getHouses() {
    try {
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawHouse) {
    try {
       await api.post('houses', rawHouse)
       console.log("house service creator")
       this.getHouses()
     } catch (error) {
       console.error(error)
     }
    

  }

  async bid(id) {
    let house = ProxyState.houses.find(c=> c.id === id)
    house.price += 100
    try {
      const res = await api.put('houses/' + id, house)
      console.log(res.data)
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      
    }
  }

  async deleteHouse(id) {
    try {
      const res = await api.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()