import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';
import './styles.scss';

// Setup orbit control
const THREEOrbitControls = OrbitControls(THREE);

// Create an empty scene
const scene = new THREE.Scene();

// Create a basic perspective camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#FFF");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
const geometry = new THREE.BoxGeometry( 24, 24, 24 );
const material = new THREE.MeshBasicMaterial( { color: "#f00" } );
const cube = new THREE.Mesh( geometry, material );

// Create a line
const materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const geometryLine = new THREE.Geometry();
geometryLine.vertices.push(new THREE.Vector3( -10, 0, 40) );
geometryLine.vertices.push(new THREE.Vector3( 0, 20, 40) );
geometryLine.vertices.push(new THREE.Vector3( 10, 0, 40) );
const line = new THREE.Line( geometryLine, materialLine );
const line2 = new THREE.Line( geometryLine, materialLine );


// Add cube & line to Scene
scene.add( cube );
scene.add( line );
scene.add( line2 );

// Add OrbitControls so that we can pan around with the mouse.
const controls = new THREEOrbitControls(camera, renderer.domElement);

// Render Loop
const render = function () {
  requestAnimationFrame( render );

  // Render the scene
  renderer.render(scene, camera);

  // Update controls
  controls.update();
};

render();