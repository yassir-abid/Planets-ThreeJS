interface Param {
    color: string,
    size: number,
}

class Planet {

    color: string;
    size: number;

    constructor(param: Param) {
        this.color = param.color;
        this.size = param.size;
    }

    draw() {
        console.log(`I want to draw a planet with these properties: color-${this.color}, size-${this.size}`);
    }
}

export default Planet;