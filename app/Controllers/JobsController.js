import { ProxyState } from "../AppState.js"
import {jobsService} from "../Services/JobsService.js"

function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(car=> template += car.Template)
    // console.log(template)
    document.getElementById('jobs').innerHTML = template
    console.log(ProxyState.jobs)
  }


export default class JobsController {
    constructor(){
        _draw()
        ProxyState.on("jobs",_draw)
    }
}