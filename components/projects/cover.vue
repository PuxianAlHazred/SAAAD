<template>
    <div class="bumpEffect">
        <div class='progressbar-cover'></div>
    </div>
  </template>
  <style lang="postcss" scooped>
    .bumpEffect {
        @apply saturate-100; width: 100vw!important; margin-left: -160px;
    }   
  </style>
  <script>
  export default {
    data() {
      return {
        content: false,
      }
    },
    methods: {
        initEffect() {
            let SCENE, CAMERA, RENDERER, FOGCOLOR, POINTLIGHT1, AMBIENTLIGHT1;
            // Three.js add
            let MANAGER = new THREE.LoadingManager();
            let LISTENER = new THREE.AudioListener();
            let mouse = { x: 0, y: 0 };
            var mouseMesh;
            main();
            function init() {
                initScene();
                initCamera();
                initRenderer();
                createPlane();
                initEventListeners();
                document.querySelector('.bumpEffect').appendChild(RENDERER.domElement);
            }
            function initScene() {
                // Scene
                SCENE = new THREE.Scene();
                initLights();
                FOGCOLOR = new THREE.Color(0x000000);
                //SCENE.fog = new THREE.Fog( FOGCOLOR, 1, 20 );
            }   
            function initCamera() {
                // Camera
                CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
                CAMERA.position.set(0, 0, 15);
                CAMERA.lookAt( SCENE.position );
                CAMERA.add( LISTENER );
                SCENE.add(CAMERA);
            }

            function createPlane() {
                // Textures
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
                let ang_rad = CAMERA.fov * Math.PI / 180;
                let fov_y = CAMERA.position.z * Math.tan(ang_rad / 2) * 2;
                // Plane
                var mouseGeometry = new THREE.PlaneGeometry(fov_y * CAMERA.aspect, fov_y * CAMERA.aspect, 2000 );
                var mouseMaterial = new THREE.MeshLambertMaterial({});
                mouseMesh = new THREE.Mesh(mouseGeometry, oldMaterial);
                mouseMesh.position.set(0, 0, 0);
                SCENE.add(mouseMesh);
            }

            function initLights() {
                AMBIENTLIGHT1 = new THREE.AmbientLight(0x000000);
                SCENE.add(AMBIENTLIGHT1);
    
                POINTLIGHT1 = new THREE.PointLight(0xffffff, 1, 100);
                POINTLIGHT1.position.set(0, 0, 0);
                SCENE.add(POINTLIGHT1);
            }
            function initRenderer() {
                // Renderer engine together with the background
                RENDERER = new THREE.WebGLRenderer({antialias: true, alpha: true});
                RENDERER.shadowMap.enabled = true;
                RENDERER.shadowMapSort = true;
                RENDERER.shadowMapSoft = true;
                RENDERER.shadowMap.type = THREE.PCFSoftShadowMap;
                RENDERER.setClearColor(0x000000, 1);
            }
            function initEventListeners() {
                window.addEventListener('resize', onWindowResize);
                window.addEventListener('mousemove', onMouseMove, false);
                onWindowResize();
            }
            function onWindowResize() {
                CAMERA.aspect = window.innerWidth / window.innerHeight;
                CAMERA.updateProjectionMatrix();
                RENDERER.setSize(window.innerWidth, window.innerHeight);
            }    
            function onMouseMove(event) {
                // Update the mouse variable
                event.preventDefault();
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                // Make the sphere follow the mouse
                var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
                vector.unproject(CAMERA);
                var dir = vector.sub(CAMERA.position).normalize();
                var distance = -CAMERA.position.z / dir.z;
                var pos = CAMERA.position.clone().add(dir.multiplyScalar(distance));
                POINTLIGHT1.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
            }
            function update(deltaTime){
                const ROTATE_TIME = 60; // Time in seconds for a full rotation
                const rotate = (deltaTime / ROTATE_TIME) * Math.PI * 2;
            }
            function animate() {
                requestAnimationFrame(animate);
                render();
            }
            function render() {
                update(0.01); 
                // For rendering
                RENDERER.autoClear = false;
                RENDERER.clear();
                RENDERER.render(SCENE, CAMERA);
            }
            function main() {
                var progressBar = document.querySelector('.progressbar-cover');

                init(); 
                MANAGER.onStart = function () {
                    
                console.log('COVER | Loading started');
                };
                MANAGER.onProgress = function ( item, loaded, total ) {
                progressBar.style.width = (loaded / total * 100) + '%';
                console.log((loaded / total * 100) + '% | ' + item);
                };
                MANAGER.onLoad = function () {
                console.log('COVER | Loading finish');
                animate();
                //GSAP.to(S1BOX3.position, {z:'-50', delay: 0, duration: 10});
                };
                MANAGER.onError = function (e) {
                    console.log('COVER | Loading error : ', e);
                };
            }
        }
    },
    mounted() {
        this.initEffect();
    },
    computed: {
      muted() {
        return this.$store.state.muted;
      }
    }
  }
  </script>