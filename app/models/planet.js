module.exports = class Planet {
    title;
    color;
    size;
    texture;

    constructor(data) {
        this.title = `Planète ${data?.title}`;
        this.color = data?.color;
        this.size = data?.size;
        this.texture = data?.texture;
    }
}