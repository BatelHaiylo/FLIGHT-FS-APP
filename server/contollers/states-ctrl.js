import {StatesModal} from '../model/States_Schema.js';

export const getStates = async(req, res) => {
    await StatesModal.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no States was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

export const getStateById = async(req,res) => {
    await StatesModal.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no State was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

export const addStateToDB = async(req,res) => {
    await StatesModal.insertMany(req.body.state)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const updateState = async(req,res) => {
    await StatesModal.findByIdAndUpdate(req.params.id, req.body.state)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const deleteState = async(req,res) => {
    await StatesModal.findByIdAndRemove(req.params.id, req.body.state)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};