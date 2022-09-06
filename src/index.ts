import Planet from './Planet';

document.addEventListener('DOMContentLoaded', () => {
    const planetElement = document.getElementById('planet');
    if (planetElement) {
        const data = planetElement.dataset;
        const planet = new Planet({
            color: data.color,
            size: Number(data.size),
        });
        planet.draw();
    }
});