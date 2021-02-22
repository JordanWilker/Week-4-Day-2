import {generateId} from "../Utils/GenerateId.js"

export default class Job{
    constructor({company, jobTitle, hours, rate, description}){
        this.company = company,
        this.jobTitle= jobTitle,
        this.hours = hours
        this.rate = rate,
        this.description = description
    }

    get Template(){
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer"></i>
        <div class="card-body">
            <h4 class="card-title">${this.jobTitle} at ${this.company}</h4>
            <p class="card-text">${this.description}</p>
            <p>Hours : ${this.hours}</p>
            <p>Pay: ${this.rate}</p>
            <button class="btn btn-success">Apply</button>
        </div>
      </div>`
      }
}