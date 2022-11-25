import {FlightsModel} from "../model/flights_schema.js";

export const getFlights = async(req, res) => {
    await FlightsModel.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no flights was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

export const getBookById = async(req,res) => {
    await FlightsModel.findById(req.params.id)
    .then(result => {
        return !singleFlightDoc ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no flights was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

export const addFlightToDB = async(req,res) => {
    await FlightsModel.insertMany(req.body.flight)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const updateFlight = async(req,res) => {
    await FlightsModel.findByIdAndUpdate(req.params.id, req.body.flight)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const deleteFlight = async(req,res) => {
    await FlightsModel.findByIdAndRemove(req.params.id, req.body.flight)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};