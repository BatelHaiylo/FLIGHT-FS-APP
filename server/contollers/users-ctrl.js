import {UsersModal} from '../model/user_scheme.js';

export const getUsers = async(req, res) => {
    await UsersModal.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no users was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

export const getUserById = async(req,res) => {
    await UsersModal.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no user was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

export const addUserToDB = async(req,res) => {
    await UsersModal.insertMany(req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const updateUser = async(req,res) => {
    await UsersModal.findByIdAndUpdate(req.params.id, req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

export const deleteUser = async(req,res) => {
    await UsersModal.findByIdAndRemove(req.params.id, req.body.user)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};