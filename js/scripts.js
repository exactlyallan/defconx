/* scripts.js */
// sources: https://threejs.org/examples/

console.log("Placeholder for procedural shape experiments.")

var container;
var camera, scene, renderer;
var mesh;
var geometry = new THREE.IcosahedronGeometry(200, 0);
var material = new THREE.MeshBasicMaterial({ color: 0xfefefe, wireframe: true, opacity: 0.5 });

init();
animate();

function addMesh() {

    // scale geometry to a uniform size
    geometry.computeBoundingSphere();
    var scaleFactor = 280 / geometry.boundingSphere.radius;
    geometry.scale(scaleFactor, scaleFactor, scaleFactor);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    var vertexNormalsHelper = new THREE.VertexNormalsHelper(mesh, 20);
    mesh.add(vertexNormalsHelper);
}

function init() {
    container = document.getElementById('graphic');
    // clear loading
    container.innerHTML = '';
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;
    scene = new THREE.Scene();
    addMesh();
    //
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    //
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {

    requestAnimationFrame(animate);
    mesh.rotation.x += 0.0008;
	mesh.rotation.y += 0.0002;
    render();
}

function render() {
    renderer.render(scene, camera);
}