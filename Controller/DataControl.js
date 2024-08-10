const Data = require('../Model/Data');

exports.getAllData = async(req, res) => {
    try{
        const getAllData = await Data.find()
        res.json(getAllData)
    }
    catch(err){
        message: err
    }
}

exports.getDataById = async(req, res) => {
    try{
        const getDataById = await Data.findOne({ _id: req.params.postId })
        res.json(getDataById)
    }
    catch(err){
        message: err
    }
}

exports.addData = async(req, res) => {
    const data = new Data({
        name: req.body.name
    })
    try{
        const addData = await data.save()
        res.json(addData)
    }
    catch(err){
        message: err
    }
}