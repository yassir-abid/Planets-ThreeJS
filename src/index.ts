class Planet {

    color: string;
    size: number;

    constructor(param1: string, param2: number) {
        this.color = param1;
        this.size = param2;
    }

    draw() {
        console.log(`I want to draw a planet with these properties: color-${this.color}, size-${this.size}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const planetElement = document.getElementById('planet');
    if (planetElement) {
        const data = planetElement.dataset;
        const planet = new Planet(data.color, Number(data.size));
        planet.draw();
    }
});