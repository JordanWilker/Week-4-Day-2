import { ProxyState } from "../AppState.js"
<<<<<<< HEAD
import { jobsService } from "../Services/JobsService.js"

  function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(job=> template += job.Template)
=======
import {jobsService} from "../Services/JobsService.js"

function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(car=> template += car.Template)
>>>>>>> a7121bd2161da285494fa70ed57ae465d8c135c7
    // console.log(template)
    document.getElementById('jobs').innerHTML = template
    console.log(ProxyState.jobs)
  }

<<<<<<< HEAD
export default class JobsController{
  constructor(){
    //console.log("jobs controller working")
    //console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob(event){
    event.preventDefault();
    console.log('creating job')
    let form = event.target
    //console.log(form)
    let rawJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value,
    }
    console.log("job creator")
    jobsService.createJob(rawJob)
  }

 

  deleteJob(id){
    console.log(id)
    jobsService.deleteJob(id)
  }

=======

export default class JobsController {
    constructor(){
        _draw()
        ProxyState.on("jobs",_draw)
    }
>>>>>>> a7121bd2161da285494fa70ed57ae465d8c135c7
}