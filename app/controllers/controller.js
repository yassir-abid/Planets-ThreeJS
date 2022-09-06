const Planet = require('../models/planet');

const controller = {
    home: (request, response) => {
        response.render('home');
    },
    planet: (request, response, next) => {
        let data;
        const searchedPlanet = request.params.planet.toLowerCase();
        if (searchedPlanet === 'terre') {
            data = {
                title: 'Terre',
                color: 'rgb(0,100,255)',
                size: 6,
            }
        } else if (searchedPlanet === 'mars') {
            data = {
                title: 'Mars',
                color: 'rgb(255,0,0)',
                size: 4,
            }
        } else if (searchedPlanet === 'venus') {
            data = {
                title: 'Vénus',
                color: 'rgb(0,200,50)',
                size: 2,
            }
        }
        const planet = new Planet(data);
        response.send(planet);
    },
}

module.exports = controller;