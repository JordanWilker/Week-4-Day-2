import { ProxyState } from "../AppState.js";
<<<<<<< HEAD
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobsService{

 
  constructor(){
    //console.log("jobs service");
    this.getJobs()
  }

  async getJobs() {
    try {
      const res = await api.get('jobs')
      console.log(res.data);
      ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(rawJob) {
    try {
       await api.post('jobs', rawJob)
       console.log("job service creator")
       this.getJobs()
     } catch (error) {
       console.error(error)
     }
    

  }

  

  async deleteJob(id) {
    try {
      const res = await api.delete(`jobs/${id}`)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
=======
import Job from "../Models/Job.js"

class JobsService{
    constructor(){
        console.log("job service")
    }
    
>>>>>>> a7121bd2161da285494fa70ed57ae465d8c135c7
}

export const jobsService = new JobsService()