const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArrays = require('../utils/parseStringAsArrays');

//Lembrar que o mongo recebe o valor da longitude primeiro

module.exports = {
 
    async index(request, response) {
        
        const { techs, longitude, latitude } = request.query;
        const techArray = parseStringAsArrays(techs);

        const devs = await Dev.find({
            techs: {
                $in: techArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs })
    }
};