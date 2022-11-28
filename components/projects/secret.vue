<template>
    <div v-show="this.$store.state.secret" class="top-0 left-0 fixed">
      <div class="ambianceEffect">
          <div class='progressbar-ambiance'></div>
      </div>
    </div>  
</template>
<style lang="postcss" scooped>
    .ambianceEffect canvas{
        @apply rounded-full; 
    }   
    #gui_container{
        position: fixed;
        bottom:0px;
        left: 0px;
        z-index:1001;
        width: 150px !important;

    }
    #gui {
        width: 150px !important;
    }
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        content: false,
      }
    },
    methods: {
      ...mapActions({ 
        actSecret: 'actSecret',
      }),
      afterEnter(el) {
        this.content = true
      },
      beforeLeave(el) {
        this.content = false
      },
      initEffect() {
            console.log( `%c SAAAD %c projects/secret.vue %c 📓 Component mounted 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#666666 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')

            let SCENE, CAMERA, RENDERER, FOGCOLOR, POINTLIGHT1, AMBIENTLIGHT1;
            // Three.js add
            let MANAGER = new THREE.LoadingManager();

            let LISTENER = new THREE.AudioListener();
            let AUDIOLOADER = new THREE.AudioLoader(MANAGER);
            const SOUND1 = new THREE.PositionalAudio(LISTENER), SOUND2 = new THREE.PositionalAudio(LISTENER), SOUND3 = new THREE.PositionalAudio(LISTENER), SOUND4 = new THREE.PositionalAudio(LISTENER), SOUND5 = new THREE.PositionalAudio(LISTENER), SOUND6 = new THREE.PositionalAudio(LISTENER), SOUND7 = new THREE.PositionalAudio(LISTENER), SOUND8 = new THREE.PositionalAudio(LISTENER);
            let S1BOX1 = new THREE.Group(), S1BOX2 = new THREE.Group(), S1BOX3 = new THREE.Group(), S1BOX4 = new THREE.Group(), S1BOX5 = new THREE.Group(), S1BOX6 = new THREE.Group(), S1BOX7 = new THREE.Group(), S1BOX8 = new THREE.Group();
            let grpTrnRight = new THREE.Group(), grpTrnLeft = new THREE.Group(), grpTrnTop = new THREE.Group(), grpTrnBottom = new THREE.Group(), grpTrnAll = new THREE.Group();
            const height = "150px";
            main();
            
            function init() {
                initScene();
                initCamera();
                initRenderer();
                createScene1();
                initDatGui();
                initEventListeners();
                
                document.querySelector('.ambianceEffect').appendChild(RENDERER.domElement);

            }
            function initScene() {
                // Scene
                SCENE = new THREE.Scene();
                FOGCOLOR = new THREE.Color(0x000000);
                //SCENE.fog = new THREE.Fog( FOGCOLOR, 1, 20 );
            }   
            function initCamera() {
                // Camera
                CAMERA = new THREE.PerspectiveCamera(45, 155 / 155, 0.1, 1000);
                CAMERA.position.set(0, 0, 5);
                CAMERA.lookAt( SCENE.position );
                CAMERA.add( LISTENER );
                SCENE.add(CAMERA);
            }
            function createScene1() {
                var pxlMaterial1, pxlMaterial2, pxlMaterial3, pxlMaterial4, pxlMaterial5, pxlMaterial6, pxlMaterial7, pxlMaterial8 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
                const pxl = new THREE.SphereGeometry( 0.1, 10, 10 );
                
                //
                const pxl1 = new THREE.Mesh( pxl, pxlMaterial1 );
                    pxl1.position.set(1.5, 0, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Beach.mp3', function( buffer ) {
                        SOUND1.setBuffer( buffer ); SOUND1.setLoop( true );  SOUND1.setVolume(0); SOUND1.setRefDistance( 0.5  ); SOUND1.play();
                    });
                    pxl1.add(SOUND1);
                    S1BOX1.add(pxl1);
                
                SCENE.add(S1BOX1);
            
                const pxl2 = new THREE.Mesh( pxl, pxlMaterial2 );
                    pxl2.position.set(1, 1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Birds.mp3', function( buffer ) {
                        SOUND2.setBuffer( buffer ); SOUND2.setLoop( true );  SOUND2.setVolume(0);SOUND2.setRefDistance( 0.5  ); SOUND2.play();
                    });
                    pxl2.add(SOUND2);
                    S1BOX2.add(pxl2);
                
                SCENE.add(S1BOX2);

                const pxl3 = new THREE.Mesh( pxl, pxlMaterial3 );
                    pxl3.position.set(0, 1.5, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Forest_waterfall.mp3', function( buffer ) {
                        SOUND3.setBuffer( buffer ); SOUND3.setLoop( true );  SOUND3.setVolume(0);SOUND3.setRefDistance( 0.5  ); SOUND3.play();
                    });
                    pxl3.add(SOUND3);
                    S1BOX3.add(pxl3);
                
                SCENE.add(S1BOX3);

                const pxl4 = new THREE.Mesh( pxl, pxlMaterial4 );
                pxl4.position.set(-1.5, 0, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Fire.mp3', function( buffer ) {
                        SOUND4.setBuffer( buffer ); SOUND4.setLoop( true );  SOUND4.setVolume(0);SOUND4.setRefDistance( 0.5  ); SOUND4.play();
                    });
                    pxl4.add(SOUND4);
                    S1BOX4.add(pxl4);
                
                SCENE.add(S1BOX4);

                const pxl5 = new THREE.Mesh( pxl, pxlMaterial5 );
                pxl5.position.set(-1, -1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Humans.mp3', function( buffer ) {
                        SOUND5.setBuffer( buffer ); SOUND5.setLoop( true );  SOUND5.setVolume(0);SOUND5.setRefDistance( 0.5  ); SOUND5.play();
                    });
                    pxl5.add(SOUND5);
                    S1BOX5.add(pxl5);
                
                SCENE.add(S1BOX5);

                const pxl6 = new THREE.Mesh( pxl, pxlMaterial6 );
                pxl6.position.set(0, -1.5, 0);
         
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Rain.mp3', function( buffer ) {
                        SOUND6.setBuffer( buffer ); SOUND6.setLoop( true );  SOUND6.setVolume(0);SOUND6.setRefDistance( 0.5  ); SOUND6.play();
                    });
                    pxl6.add(SOUND6);
                    S1BOX6.add(pxl6);
                
                SCENE.add(S1BOX6);

                const pxl7 = new THREE.Mesh( pxl, pxlMaterial7 );
                pxl7.position.set(-1, 1, 0);
                
                    AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Stream.mp3', function( buffer ) {
                        SOUND7.setBuffer( buffer ); SOUND7.setLoop( true );  SOUND7.setVolume(0);SOUND7.setRefDistance( 0.5  ); SOUND7.play();
                    });
                    pxl7.add(SOUND7);
                    S1BOX7.add(pxl7);
                
                SCENE.add(S1BOX7);

                const pxl8 = new THREE.Mesh( pxl, pxlMaterial8 );
                pxl8.position.set(1, -1, 0);

                        AUDIOLOADER.load( 'https://cdn.jsdelivr.net/gh/Murmur-app/murmur-app.github.io@develop/app/assets/audio/Thunder.mp3', function( buffer ) {
                            SOUND8.setBuffer( buffer ); SOUND8.setLoop( true );  SOUND8.setVolume(0);SOUND8.setRefDistance( 0.5 ); SOUND8.play();                        
                        });
                        pxl8.add(SOUND8);
                        S1BOX8.add(pxl8);
                
                SCENE.add(S1BOX8);
            }
            function initDatGui() {
              const SoundControls = function () {
                this.master = LISTENER.getMasterVolume();
                this.sound1 = SOUND1.getVolume();
                this.sound2 = SOUND2.getVolume();
                this.sound3 = SOUND3.getVolume();
                this.sound4 = SOUND4.getVolume();
                this.sound5 = SOUND5.getVolume();
                this.sound6 = SOUND6.getVolume();
                this.sound7 = SOUND7.getVolume();
                this.sound8 = SOUND8.getVolume();
              };
                const controlPxl1 = new function() {this.positionZ = 0;}();
                const controlPxl2 = new function() {this.positionZ = 0;}();
                const controlPxl3 = new function() {this.positionZ = 0;}();
                const controlPxl4 = new function() {this.positionZ = 0;}();

                const controlPxl5 = new function() {this.positionZ = 0;}();
                const controlPxl6 = new function() {this.positionZ = 0;}();
                const controlPxl7 = new function() {this.positionZ = 0;}();
                const controlPxl8 = new function() {this.positionZ = 0;}();

                const gui = new dat.GUI({ autoPlace: false });
                const soundControls = new SoundControls();
                gui.domElement.id = 'gui';
                gui_container.appendChild(gui.domElement);
                //pxl 

                {
                const guiS1BOX = gui.addFolder('BOX');
                      guiS1BOX.add( soundControls, 'master' ).min( 0.0 ).max( 1.0 ).step( 0.01 ).onChange( function () { LISTENER.setMasterVolume( soundControls.master ); });
                const guiPositionS1BOX1  = guiS1BOX.addFolder('Box 1 🌊');
                      guiPositionS1BOX1.add(controlPxl1, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { 
                        S1BOX1.position.z = (controlPxl1.positionZ); 
                        SOUND1.setVolume( controlPxl1.positionZ ); 
                      });  
                const guiPositionS1BOX2  = guiS1BOX.addFolder('Box 2 🐦');
                      guiPositionS1BOX2.add(controlPxl2, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX2.position.z = (controlPxl2.positionZ); SOUND2.setVolume( controlPxl2.positionZ );});  
                const guiPositionS1BOX3  = guiS1BOX.addFolder('Box 3 💦');
                      guiPositionS1BOX3.add(controlPxl3, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX3.position.z = (controlPxl3.positionZ); SOUND3.setVolume( controlPxl3.positionZ );});  
                const guiPositionS1BOX4  = guiS1BOX.addFolder('Box 4 🔥');
                      guiPositionS1BOX4.add(controlPxl4, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX4.position.z = (controlPxl4.positionZ); SOUND4.setVolume( controlPxl4.positionZ );});  
                
                const guiPositionS1BOX5  = guiS1BOX.addFolder('Box 5 🧔🏻');
                      guiPositionS1BOX5.add(controlPxl5, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX5.position.z = (controlPxl5.positionZ); SOUND5.setVolume( controlPxl5.positionZ );});  
                const guiPositionS1BOX6  = guiS1BOX.addFolder('Box 6 💧');
                      guiPositionS1BOX6.add(controlPxl6, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX6.position.z = (controlPxl6.positionZ); SOUND6.setVolume( controlPxl6.positionZ );});  
                const guiPositionS1BOX7  = guiS1BOX.addFolder('Box 7 💨');
                      guiPositionS1BOX7.add(controlPxl7, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX7.position.z = (controlPxl7.positionZ); SOUND7.setVolume( controlPxl7.positionZ );});  
                const guiPositionS1BOX8  = guiS1BOX.addFolder('Box 8 ⚡️');
                      guiPositionS1BOX8.add(controlPxl8, 'positionZ').min( 0.0 ).max( 1.0 ).step( 0.1 ).onChange( function() { S1BOX8.position.z = (controlPxl8.positionZ); SOUND8.setVolume( controlPxl8.positionZ );});  
                }
            }
            function initRenderer() {
                // Renderer engine together with the background
                RENDERER = new THREE.WebGLRenderer({antialias: true, alpha: true});
                RENDERER.shadowMap.enabled = true;
                RENDERER.shadowMapSort = true;
                RENDERER.shadowMapSoft = true;
                RENDERER.shadowMap.type = THREE.PCFSoftShadowMap;
                RENDERER.setClearColor(0x000000, 0);
                
            }
            function initEventListeners() {
                window.addEventListener('resize', onWindowResize);
                onWindowResize();
            }
            function onWindowResize() {
                CAMERA.aspect = 155 / 155;
                CAMERA.updateProjectionMatrix();
                RENDERER.setSize(155, 155);
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
                var mutedBtn = document.querySelector("#muted");
                MANAGER.onStart = function () {
                    console.log( `%c SAAAD %c projects/secret.vue %c ⏳ Loading Started"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#888888; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
                };
                console.groupCollapsed("Loading items");

                MANAGER.onProgress = function ( item, loaded, total ) {
                    console.log( `%c SAAAD %c projects/secret.vue %c Loading ⏳`+(loaded / total * 100)+`% - `+item, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#888888; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
                };

                MANAGER.onLoad = function () {
                    console.groupEnd();

                    console.log( `%c SAAAD %c projects/secret.vue %c ⏳ Loading Finish"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#888888; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
                    //console.groupEnd();
                    animate();
                    mutedBtn.addEventListener('click', setMuted);
                    function setMuted() {
                        if(mutedBtn.classList.contains('muted')){
                            console.log('true')
                            LISTENER.setMasterVolume( 0 );
                        } 
                        if(mutedBtn.classList.contains('notmuted')) {
                            console.log('false')
                            LISTENER.setMasterVolume( 1 );
                        }
                    }  
                    //GSAP.to(S1BOX3.position, {z:'-50', delay: 0, duration: 10});
                };
                MANAGER.onError = function (e) {
                    console.log( `%c SAAAD %c Loading %c Error"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#888888; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
                    console.log(e)
                };
                init(); 


                

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
  