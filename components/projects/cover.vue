<template>
    <div class="bumpEffect">
        <div class='progressbar-cover'></div>
        <div id="gui_container"></div>
    </div>
  </template>
  <style lang="postcss">
    .bumpEffect {
        @apply saturate-100; width: 100vw!important; margin-left: -160px;
    }   
    #gui_container{
        position: fixed;
        top:0px;
        right: 0px;
        z-index:1002;
    }
    #gui{
        transform:translate(-50%, 0);
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
            let AUDIOLOADER = new THREE.AudioLoader(MANAGER);
            const SOUND1 = new THREE.PositionalAudio(LISTENER), SOUND2 = new THREE.PositionalAudio(LISTENER), SOUND3 = new THREE.PositionalAudio(LISTENER), SOUND4 = new THREE.PositionalAudio(LISTENER), SOUND5 = new THREE.PositionalAudio(LISTENER), SOUND6 = new THREE.PositionalAudio(LISTENER), SOUND7 = new THREE.PositionalAudio(LISTENER), SOUND8 = new THREE.PositionalAudio(LISTENER);
            let PARTICULES = new THREE.Object3D();
            let ELEVATOR = new THREE.Group();
            let S1BOX1 = new THREE.Group(), S1BOX2 = new THREE.Group(), S1BOX3 = new THREE.Group(), S1BOX4 = new THREE.Group(), S1BOX5 = new THREE.Group(), S1BOX6 = new THREE.Group(), S1BOX7 = new THREE.Group(), S1BOX8 = new THREE.Group();
            let grpTrnRight = new THREE.Group(), grpTrnLeft = new THREE.Group(), grpTrnTop = new THREE.Group(), grpTrnBottom = new THREE.Group(), grpTrnAll = new THREE.Group();
            
            // Custom global variables
            let GSAP = this.$gsap;
            let de2ra = function(degree) { return degree*(Math.PI/180); };
            let randomRot = function(min, max) { return Math.random() * (max - min) + min; };
            let randomRotInt = function(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min };
            let getRandomInt = function(max) { return 'texture_'+Math.floor(Math.random() * max);}
            let TIME = 0;
            let params = { radius: 16, pointsNum: 2000 };
            let mouse = { x: 0, y: 0 };
            let objects = [];
            var mouseMesh;
            main();
            function init() {
                initScene();
                initCamera();
                initRenderer();
                createScene1();
                createPlane();
                initDatGui();
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
            function createScene1() {
                var pxlMaterial1, pxlMaterial2, pxlMaterial3, pxlMaterial4, pxlMaterial5, pxlMaterial6, pxlMaterial7, pxlMaterial8 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
                const pxl = new THREE.BoxGeometry( 0.5, 0.5, 0.5, 32, 32 );
                //
                const pxl1 = new THREE.Mesh( pxl, pxlMaterial1 );
                    pxl1.position.set(1.5, 0, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Beach.mp3', function( buffer ) {
                        SOUND1.setBuffer( buffer ); SOUND1.setLoop( true ); SOUND1.setVolume( 1 ); SOUND1.setRefDistance( 0.5  ); SOUND1.play();
                    });
                    pxl1.add(SOUND1);
                    S1BOX1.add(pxl1);
                
                SCENE.add(S1BOX1);
            
                const pxl2 = new THREE.Mesh( pxl, pxlMaterial2 );
                    pxl2.position.set(1, 1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Birds.mp3', function( buffer ) {
                        SOUND2.setBuffer( buffer ); SOUND2.setLoop( true ); SOUND2.setVolume( 1 ); SOUND2.setRefDistance( 0.5  ); SOUND2.play();
                    });
                    pxl2.add(SOUND2);
                    S1BOX2.add(pxl2);
                
                SCENE.add(S1BOX2);

                const pxl3 = new THREE.Mesh( pxl, pxlMaterial3 );
                    pxl3.position.set(0, 1.5, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Forest_waterfall.mp3', function( buffer ) {
                        SOUND3.setBuffer( buffer ); SOUND3.setLoop( true ); SOUND3.setVolume( 1 ); SOUND3.setRefDistance( 0.5  ); SOUND3.play();
                    });
                    pxl3.add(SOUND3);
                    S1BOX3.add(pxl3);
                
                SCENE.add(S1BOX3);

                const pxl4 = new THREE.Mesh( pxl, pxlMaterial4 );
                pxl4.position.set(-1.5, 0, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Fire.mp3', function( buffer ) {
                        SOUND4.setBuffer( buffer ); SOUND4.setLoop( true ); SOUND4.setVolume( 1 ); SOUND4.setRefDistance( 0.5  ); SOUND4.play();
                    });
                    pxl4.add(SOUND4);
                    S1BOX4.add(pxl4);
                
                SCENE.add(S1BOX4);

                const pxl5 = new THREE.Mesh( pxl, pxlMaterial5 );
                pxl5.position.set(-1, -1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Humans.mp3', function( buffer ) {
                        SOUND5.setBuffer( buffer ); SOUND5.setLoop( true ); SOUND5.setVolume( 1 ); SOUND5.setRefDistance( 0.5  ); SOUND5.play();
                    });
                    pxl5.add(SOUND5);
                    S1BOX5.add(pxl5);
                
                SCENE.add(S1BOX5);

                const pxl6 = new THREE.Mesh( pxl, pxlMaterial6 );
                pxl6.position.set(0, -1.5, 0);
         
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Rain.mp3', function( buffer ) {
                        SOUND6.setBuffer( buffer ); SOUND6.setLoop( true ); SOUND6.setVolume( 1 ); SOUND6.setRefDistance( 0.5  ); SOUND6.play();
                    });
                    pxl6.add(SOUND6);
                    S1BOX6.add(pxl6);
                
                SCENE.add(S1BOX6);

                const pxl7 = new THREE.Mesh( pxl, pxlMaterial7 );
                pxl7.position.set(-1, 1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Stream.mp3', function( buffer ) {
                        SOUND7.setBuffer( buffer ); SOUND7.setLoop( true ); SOUND7.setVolume( 1 ); SOUND7.setRefDistance( 0.5  ); SOUND7.play();
                    });
                    pxl7.add(SOUND7);
                    S1BOX7.add(pxl7);
                
                SCENE.add(S1BOX7);

                const pxl8 = new THREE.Mesh( pxl, pxlMaterial8 );
                pxl8.position.set(1, -1, 0);
 

          
                        AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Thunder.mp3', function( buffer ) {
                            SOUND8.setBuffer( buffer ); SOUND8.setLoop( true ); SOUND8.setVolume( 1 ); SOUND8.setRefDistance( 0.5 ); SOUND8.play();                        
                        });
                        pxl8.add(SOUND8);
                        S1BOX8.add(pxl8);
                
                SCENE.add(S1BOX8);
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
            function initDatGui() {
                const controlPxl1 = new function() {this.positionZ = 0;}();
                const controlPxl2 = new function() {this.positionZ = 0;}();
                const controlPxl3 = new function() {this.positionZ = 0;}();
                const controlPxl4 = new function() {this.positionZ = 0;}();

                const controlPxl5 = new function() {this.positionZ = 0;}();
                const controlPxl6 = new function() {this.positionZ = 0;}();
                const controlPxl7 = new function() {this.positionZ = 0;}();
                const controlPxl8 = new function() {this.positionZ = 0;}();
                const gui = new dat.GUI({ autoPlace: false });
                gui.domElement.id = 'gui';
                gui_container.appendChild(gui.domElement);
                //pxl 

                {
                const guiS1BOX = gui.addFolder('BOX');
                const guiPositionS1BOX1  = guiS1BOX.addFolder('Box 1 🌊');
                      guiPositionS1BOX1.add(controlPxl1, 'positionZ', -15, 15).onChange( function() { S1BOX1.position.z = (controlPxl1.positionZ); });  
                const guiPositionS1BOX2  = guiS1BOX.addFolder('Box 2 🐦');
                      guiPositionS1BOX2.add(controlPxl2, 'positionZ', -15, 15).onChange( function() { S1BOX2.position.z = (controlPxl2.positionZ); });  
                const guiPositionS1BOX3  = guiS1BOX.addFolder('Box 3 💦');
                      guiPositionS1BOX3.add(controlPxl3, 'positionZ', -15, 15).onChange( function() { S1BOX3.position.z = (controlPxl3.positionZ); });  
                const guiPositionS1BOX4  = guiS1BOX.addFolder('Box 4 🔥');
                      guiPositionS1BOX4.add(controlPxl4, 'positionZ', -15, 15).onChange( function() { S1BOX4.position.z = (controlPxl4.positionZ); });  
                
                const guiPositionS1BOX5  = guiS1BOX.addFolder('Box 5 🧔🏻');
                      guiPositionS1BOX5.add(controlPxl5, 'positionZ', -15, 15).onChange( function() { S1BOX5.position.z = (controlPxl5.positionZ); });  
                const guiPositionS1BOX6  = guiS1BOX.addFolder('Box 6 💧');
                      guiPositionS1BOX6.add(controlPxl6, 'positionZ', -15, 15).onChange( function() { S1BOX6.position.z = (controlPxl6.positionZ); });  
                const guiPositionS1BOX7  = guiS1BOX.addFolder('Box 7 💨');
                      guiPositionS1BOX7.add(controlPxl7, 'positionZ', -15, 15).onChange( function() { S1BOX7.position.z = (controlPxl7.positionZ); });  
                const guiPositionS1BOX8  = guiS1BOX.addFolder('Box 8 ⚡️');
                      guiPositionS1BOX8.add(controlPxl8, 'positionZ', -15, 15).onChange( function() { S1BOX8.position.z = (controlPxl8.positionZ); });  
                }
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


                S1BOX1.rotation.z -= rotate;
                S1BOX2.rotation.z -= rotate;
                S1BOX3.rotation.z -= rotate;
                S1BOX4.rotation.z -= rotate;
                
                S1BOX5.rotation.z -= rotate;
                S1BOX6.rotation.z -= rotate;
                S1BOX7.rotation.z -= rotate;
                S1BOX8.rotation.z -= rotate;
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
                var mutedBtn = document.querySelector("#muted")


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

                mutedBtn.addEventListener('click', setMuted);

                function setMuted() {
                    if(mutedBtn.classList.contains('muted')){
                        console.log('true')
                        SOUND1.setVolume( 0 );
                        SOUND2.setVolume( 0 );
                        SOUND3.setVolume( 0 );
                        SOUND4.setVolume( 0 );
                        SOUND5.setVolume( 0 );
                        SOUND6.setVolume( 0 );
                        SOUND7.setVolume( 0 );
                        SOUND8.setVolume( 0 );
                    } 
                    if(mutedBtn.classList.contains('notmuted')) {
                        console.log('false')
                        SOUND1.setVolume( 1 );
                        SOUND2.setVolume( 1 );
                        SOUND3.setVolume( 1 );
                        SOUND4.setVolume( 1 );
                        SOUND5.setVolume( 1 );
                        SOUND6.setVolume( 1 );
                        SOUND7.setVolume( 1 );
                        SOUND8.setVolume( 1 );
                    }
                }  

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