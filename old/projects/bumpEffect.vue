<template>
    <div class="bumpEffect"></div>
</template>
<style lang="postcss">
    .bumpEffect {
        @apply saturate-100;
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
            scene.add(light);
            const helper = new THREE.SpotLightHelper( light, 1 );
            scene.add( helper );

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
            const texture2 = new THREE.TextureLoader().load('/img/мреть(наутро ночь).jpg')
            const texture = new THREE.TextureLoader().load('/img/All-Lanes-Of-Lilac-Evening.jpg')
            texture.crossOrigin = 'anonymous';
            // Material
            var oldMaterial = new THREE.MeshPhongMaterial({
                color      :  new THREE.Color("rgb(255,255,255)"),
                emissive   :  new THREE.Color("rgb(0,0,0)"),
                map        :  texture2,
                //normalMap  :  texture,
                bumpMap    :  texture2,
                normalScale:  new THREE.Vector2(0.0, 0.0),
                bumpScale  :  0.045,
            });
            // Calcul W & H 
            let ang_rad = camera.fov * Math.PI / 180;
            let fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;

            // Plane
            var mouseGeometry = new THREE.PlaneGeometry(fov_y * camera.aspect, fov_y * camera.aspect, 1000 );
            var mouseMaterial = new THREE.MeshLambertMaterial({});
            mouseMesh = new THREE.Mesh(mouseGeometry, oldMaterial);
            mouseMesh.position.set(0, 0, 0);
            scene.add(mouseMesh);

            // Bubble
            const hdrEquirect = new THREE.RGBELoader().load(
                "/img/water.jpg",
                () => {
                    hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
                }
            );
            const roughNormal = new THREE.TextureLoader().load('/img/water.jpg')
            const spGeom = new THREE.SphereGeometry(3, 64, 64);
            const material1 = new THREE.MeshPhysicalMaterial({
                side: THREE.DoubleSide,
                envMap: hdrEquirect,
                normalMap: roughNormal,
                clearcoat: 0.5,
                clearcoatNormalMap: roughNormal,
                roughness: 0.15,
                transmission: 1,
                thickness: 1
            });
            sp1 = new THREE.Mesh(spGeom, material1);
            sp1.position.set(0, 0, -1);
            sp1.receiveShadow = true;
            sp1.castShadow = true;
            scene.add(sp1);

            // Text

                var fntloader = new THREE.FontLoader();
                fntloader.load('fnt/EBGaramond_Regular.json', function (res) {
                var textGeo = new THREE.TextGeometry('SAAAD', {
                    font: res,
                    size: 20,
                    height: 20,
                    curveSegments:10,
                    weight: "normal",
                    bevelThickness:1,
                    bevelSize:0.3,
                    bevelSegments:3,
                    bevelEnabled:true
                });
                textGeo.computeBoundingBox();
                textGeo.computeVertexNormals();

                var text = new THREE.Mesh(textGeo, mouseMaterial)
                text.position.x = 0; //-textGeo.boundingBox.max.x/2;
                text.position.z = -1;
                text.castShadow = true;
                scene.add(text)
                console.log('text ok')

                });
                

            



        }
        document.addEventListener('mousemove', onMouseMove, false);
        this.$gsap.to(mouseMesh.position, {z:'-5',delay: 5, duration:5, ease:"power2.linear"});
 
        function update(deltaTime){
            const ROTATE_TIME = 60; // Time in seconds for a full rotation
            const rotateX = (deltaTime / ROTATE_TIME) * Math.PI * 2;
            sp1.rotation.y += rotateX;
            sp1.rotation.z += rotateX;
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
            light3.position.copy(pos);

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
    animateOnScroll() {
        var blocArtiste = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: ".bumpEffect",
                    start: "center bottom",
                    end: "center top",
                    scrub: false,
                    toggleActions: "play reverse play reverse",
                    onEnterBack: () => {
                        dateEvent.play();
                    },
                    onLeaveBack: () => {
                        dateEvent.reverse();
                    },
                    onEnter: () => {
                        dateEvent.play();
                    },
                    onLeave: () => {
                        dateEvent.reverse();
                    },
                    //markers: {startColor: "purple", endColor: "yellow", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
            }).fromTo(".bumpEffect", {  y: 50, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "lineary"});
    }
  },
  mounted() {
    this.initEffect();
    //this.animateOnScroll();
  }
}
</script>
