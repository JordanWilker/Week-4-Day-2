import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService{

 
  constructor(){
    console.log("cars service");
    this.getCars()
  }

  async getCars() {
    try {
      const res = await api.get('cars')
      // console.log(res.data)
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch (error) {
      console.error(error)
    }
  }

  async createCar(rawCar) {
    try {
      await api.post('cars', rawCar)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
    
    // NOTE again we could just manually add this to our local data
    try {
      const res = await api.post('cars', rawCar)
      ProxyState.cars = [ ...ProxyState.cars, new Car(res.data)]
    } catch (error) {
      console.error(error)
    }
    

  }

  async bid(id) {
    let car = ProxyState.cars.find(c=> c.id === id)
    car.price += 100
    try {
      const res = await api.put('cars/' + id, car)
      console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.cars = ProxyState.cars
    } catch (error) {
      
    }
  }

  async deleteCar(id) {
    try {
      // await api.delete('cars/'+id)
      const res = await api.delete(`cars/${id}`)
      // NOTE We can retrieve the cars again from the method we already know works
      // con is this is another serve request
      this.getCars()
      // NOTE we could also splice the item out of our local array using the id
      // con is we dont know if our local data is synced with our db anymore
      // let index = ProxyState.cars.findIndex(c => c.id == id)
      // ProxyState.cars.splice(index, 1)
      // ProxyState.cars = ProxyState.cars
      // OR
      // ProxyState.cars = ProxyState.cars.filter(c=> c.id != id)
      // console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()