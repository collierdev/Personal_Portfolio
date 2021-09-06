import { useEffect, useRef } from 'react';
import * as THREE from "three";

function DNA() {

    const mountRef = useRef(null);
    useEffect(() => {
        var container = document.getElementById('container');
        var width = document.getElementById('container').offsetWidth;
        var height = document.getElementById('container').offsetHeight;
        console.log(width+'x'+height);
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer( { alpha: true } );
        
        renderer.setSize(width, height);
        
        mountRef.current.appendChild( renderer.domElement );
        
        var cylinder =  '#f7b733';
        var purple = '#fc4a1a';  
        var tubeGeometry = new THREE.CylinderGeometry(0.4,0.4,10,32);
        var ballGeometry = new THREE.SphereGeometry(1.1,32,32);

        var cylinderMaterial = new THREE.MeshBasicMaterial( { color: cylinder } );
        var purpleMaterial = new THREE.MeshBasicMaterial( { color: purple } );

        var dna = new THREE.Object3D();
        var holder = new THREE.Object3D();


        for (var i = 0; i <= 20; i++) {

            var cylinder = new THREE.Mesh(tubeGeometry, cylinderMaterial);
            cylinder.rotation.z = 90 * Math.PI/180; 
            cylinder.position.x = 0;

            var ballRight = new THREE.Mesh( ballGeometry, purpleMaterial );
            ballRight.position.x = 6;

            var ballLeft = new THREE.Mesh( ballGeometry, purpleMaterial );
            ballLeft.position.x = -5;

            var row = new THREE.Object3D();

            row.add(cylinder);
            row.add(ballRight);
            row.add(ballLeft);

            row.position.y = i*2;
            row.rotation.y = 30*i * Math.PI/180;

            dna.add(row);

        };


        dna.position.y = -20;

        scene.add(dna);

        dna.position.y = -20;
        holder.add(dna)
        scene.add(holder);

        camera.position.z = 35;
        
        var animate = function () {
          requestAnimationFrame( animate );
          holder.rotation.x += 0.00;
	      holder.rotation.y += 0.06;
          renderer.render( scene, camera );
        };
        let onWindowResize = function () {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize( width, height );
          };
      
          container.addEventListener("resize", onWindowResize, false);
      
        animate();
    
        return () => mountRef.current.removeChild( renderer.domElement);
      }, []);

    return (
        <div ref={mountRef} className="about-3d" id="container">
        </div>
    )
}
export default DNA
