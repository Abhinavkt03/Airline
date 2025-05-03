const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const airplaneRepo = new AirplaneRepository();
const AppError = require('../utils/errors/app-error')

async function createAirplane(data){
    try {
        const airplane = await airplaneRepo.create(data);
        return airplane;
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }        
        throw new AppError("Cannot create a new Airplane. Please try agin after some time.", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try {    
        const airplanes = await airplaneRepo.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Cannot Get the Airplanes. Please try agin after some time.");
        
    }
}

module.exports = {
    createAirplane ,
    getAirplanes
}