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
    }

    calculScreenRatio(): number {
        return window.innerWidth / window.innerHeight;
    }
}

export default Planet;