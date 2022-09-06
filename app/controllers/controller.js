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
                texture: 'img/terre.jpeg',
            }
        } else if (searchedPlanet === 'mars') {
            data = {
                title: 'Mars',
                color: 'rgb(255,0,0)',
                size: 4,
                texture: 'img/mars.jpg',
            }
        } else if (searchedPlanet === 'venus') {
            data = {
                title: 'Vénus',
                color: 'rgb(0,200,50)',
                size: 2,
                texture: 'img/venus.jpg',
            }
        } else {
            return next();
        }
        const planet = new Planet(data);
        response.render('planet', planet);
    },
    notFound: (request, response) => {
        response.status(404).json('Ce endpoint n\'existe pas');
    }
}

module.exports = controller;