import * as THREE from 'three';

interface Param {
    color: string,
    size: number,
}

class Planet {

    color: string;
    size: number;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    sphere: THREE.Mesh;
    renderer: THREE.WebGLRenderer;
    light: THREE.PointLight;

    constructor(param: Param) {
        this.color = param.color;
        this.size = param.size;
        // fix this value using bind
        this.redraw = this.redraw.bind(this);
    }

    draw() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.calculScreenRatio(), 1, 1000);
        this.camera.position.z = 15;
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const geometry = new THREE.SphereGeometry(this.size, 128, 64);
        const material = new THREE.MeshLambertMaterial({ color: this.color });
        this.sphere = new THREE.Mesh(geometry, material);
        this.scene.add(this.sphere);

        this.light = new THREE.PointLight();
        this.light.position.set(-50, 50, 50);
        this.scene.add(this.light);

        this.renderer.render(this.scene, this.camera);

        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = this.calculScreenRatio();
            // Updates the camera projection matrix must be called after any change of parameters
            this.camera.updateProjectionMatrix();
        });

        this.redraw();
    }

    getTime(): number {
        return Date.now() / 1000;
    }

    redraw() {
        // move the camera to see the scene from another point of view
        const time = this.getTime();
        this.camera.position.x = Math.cos(time) * 15;
        this.camera.position.z = Math.sin(time) * 15;

        // look at the center of the planet
        this.camera.lookAt(this.sphere.position);

        // redraw the scene in the canvas
        this.renderer.render(this.scene, this.camera);

        // https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
        requestAnimationFrame(this.redraw);
    }

    calculScreenRatio(): number {
        return window.innerWidth / window.innerHeight;
    }
}

export default Planet;