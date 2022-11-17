<template>
    <div class="bumpEffect"></div>
</template>
<style lang="postcss">
    .bumpEffect {
        @apply saturate-100; width: 100vw!important; margin-left: -160px;
    }    
</style>
<script>
export default {
  methods: {
    initEffect() {
        // Define the standard global variables
        var container,
        scene,
        camera,
        renderer,
        plane,
        mouseMesh,
        sp1,
        light,
        light3;
        
        // Custom global variables
        var mouse = {
        x: 0,
        y: 0
        };

        init();
        animate();

        function init() {

            // Scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x000000 );
            scene.fog = new THREE.Fog( 0x000000, 1, 20 );
            window.addEventListener('resize', function() {
                var WIDTH = window.innerWidth,
                HEIGHT = window.innerHeight;
                renderer.setSize(WIDTH, HEIGHT);
                camera.aspect = WIDTH / HEIGHT;
                camera.updateProjectionMatrix();
            });
            // Camera
            var screenWidth = window.innerWidth,
                screenHeight = window.innerHeight,
                viewAngle = 45,
                nearDistance = 0.1,
                farDistance = 1000;
            camera = new THREE.PerspectiveCamera(viewAngle, screenWidth / screenHeight, nearDistance, farDistance);
            scene.add(camera);
            camera.position.set(0, 0, 10);
            camera.lookAt(scene.position);

            // Renderer engine together with the background
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setSize(screenWidth, screenHeight);
            container = document.querySelector('.bumpEffect');
            container.appendChild(renderer.domElement);

            // Define the lights for the scene
            light = new THREE.SpotLight(0xFFFFFF);
            light.position.set(0, 0, -4);
            light.castShadow = true;
            //scene.add(light);
            const helper = new THREE.SpotLightHelper( light, 1 );
            //scene.add( helper );

            // Ambient
            var lightAmb = new THREE.AmbientLight(0x000000);
            scene.add(lightAmb);

            // Point
            light3 = new THREE.PointLight(0xffffff, 1, 100);
            light3.position.set(0, 0, 0);
            scene.add(light3);
            const pointLightHelper = new THREE.PointLightHelper( light3, 1 );
            //scene.add( pointLightHelper );

            // Textures
            function getRandomInt(max) { return 'texture_'+Math.floor(Math.random() * max);}
            const texture_0 = new THREE.TextureLoader().load('/img/Heat-Death.jpg')
            const texture_1 = new THREE.TextureLoader().load('/img/Orbs-And-Channels-RE.jpg')
            const texture_2 = new THREE.TextureLoader().load('/img/The-Charnel-Ground.jpg')

            var texturesList = [
                '/img/Heat-Death.jpg',
                '/img/Orbs-And-Channels-RE.jpg',
                '/img/The-Charnel-Ground.jpg',
                '/img/мреть.jpg',
                '/img/мреть(наутро ночь).jpg',
                '/img/Sustained-Layers.jpg',
                '/img/Last-Love.jpg',
                '/img/Different-Streams.jpg',
            ]; 
            var randIndex = THREE.Math.randInt(0, texturesList.length - 1);
            var randTexture = new THREE.TextureLoader().load(texturesList[randIndex]);
            // Material
            var oldMaterial = new THREE.MeshPhongMaterial({
                color      :  new THREE.Color("rgb(255,255,255)"),
                emissive   :  new THREE.Color("rgb(0,0,0)"),
                map        :  randTexture,
                //normalMap  :  texture,
                bumpMap    :  randTexture,
                normalScale:  new THREE.Vector2(0.0, 0.0),
                bumpScale  :  0.045,
            });
            // Calcul W & H 
            let ang_rad = camera.fov * Math.PI / 180;
            let fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;

            // Plane
            var mouseGeometry = new THREE.PlaneGeometry(fov_y * camera.aspect, fov_y * camera.aspect, 2000 );
            var mouseMaterial = new THREE.MeshLambertMaterial({});
            mouseMesh = new THREE.Mesh(mouseGeometry, oldMaterial);
            mouseMesh.position.set(0, 0, 0);
            scene.add(mouseMesh);

        }
        document.addEventListener('mousemove', onMouseMove, false);
 
        function update(deltaTime){
            const ROTATE_TIME = 60; // Time in seconds for a full rotation
            const rotateX = (deltaTime / ROTATE_TIME) * Math.PI * 2;

        }
        // Follows the mouse event
        function onMouseMove(event) {

            // Update the mouse variable
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Make the sphere follow the mouse
            var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
            vector.unproject(camera);
            var dir = vector.sub(camera.position).normalize();
            var distance = -camera.position.z / dir.z;
            var pos = camera.position.clone().add(dir.multiplyScalar(distance));
            light3.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
            light.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
        };

        // Animate the elements
        function animate() {
            requestAnimationFrame(animate);
            render();
             
        }

        // Rendering function
        function render() {
            update(0.01); 
            // For rendering
            renderer.autoClear = false;
            renderer.clear();
            renderer.render(scene, camera);
        };
    },
  },
  mounted() {
    this.initEffect();
  }
}
</script>
