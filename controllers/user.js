const { response } = require('express');


const userGet = (req, res = response) => {

    res.json({
        message: 'Get - Controllers - User',
    });
}

const putUser = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(400).json({
        message: 'Put - Controllers - User',
        nombre, edad
    });
}
const postUser = (req, res = response) => {

    res.json({
        message: 'Post - Controllers - User',
    });
}

const patchUser = (req, res = response) => {
    res.status(400).json({
        message: 'Patch - Controllers - User'
    });
}
const deleteUser = (req, res = response) => {
    res.status(400).json({
        message: 'Delete - Controllers - User'
    });
}



module.exports = {
    userGet,
    putUser,
    postUser,
    patchUser,
    deleteUser
}