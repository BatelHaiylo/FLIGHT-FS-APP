import {AirlinesModel} from '../model/airline_schema.js';

export const getAirlines = async(req, res) => {
    await AirlinesModel.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no airlines was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

export const getAirlineById = async(req,res) => {
    await AirlinesModel.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no airlines was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

export const addAirlineToDB = async(req,res) => {
    await AirlinesModel.insertMany(req.body.airline)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const updateAirline = async(req,res) => {
    await AirlinesModel.findByIdAndUpdate(req.params.id, req.body.airline)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const deleteAirline = async(req,res) => {
    await AirlinesModel.findByIdAndRemove(req.params.id, req.body.airline)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};