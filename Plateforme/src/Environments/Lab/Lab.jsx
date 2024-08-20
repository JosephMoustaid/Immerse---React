import React from 'react';
import wallTexture from "../../assets/textures/wall.png";
import floorTexture from "../../assets/textures/floor.png";
import ceilingTexture from "../../assets/textures/ceiling.png";

import lights from "../../assets/3D_Components/ceiling_lamp_-_11mb.glb";



import whiteBoard from "../../assets/3D_Components/white_board.glb";

import teacherDesk from "../../assets/3D_Components/teacher_desk.glb";

import ProjectorScreen from "../../assets/3D_Components/projector_screen.glb"; 
import Projector from "../../assets/3D_Components/projector.glb"; 

import DeskEntity from '../../EnvironmentComponents/DeskEntity.jsx';


import SharedDesk from '../../EnvironmentComponents/SharedDesk.jsx';


function Lab() {
    return (
        <a-scene>
            {/*Spawn point */}

            <a-assets>
                <a-asset-item id="ceilingLamp" src={lights} />
                <img id="floorTexture" src={floorTexture} />
                <img id="wallTexture" src={wallTexture} />
                <img id="ceilingTexture" src={ceilingTexture} />
            </a-assets>

            {/* Ambient Lighting */}
            <a-entity light="type: ambient; intensity: 0.5" />

            {/* Directional Lighting */}
            <a-entity light="type: directional; intensity: 0.8" position="0 30 30" />

            {/* Camera */}
            <a-camera position="12 10 12"  rotation="0 -180 0"/>

            {/* Floor */}
            <a-plane 
                rotation="-90 0 0" 
                width="80" 
                height="80" 
                src="#floorTexture"
            />

            {/* Walls */}
            <a-box 
                position="0 10 -40" 
                rotation="0 0 0" 
                width="80" 
                height="20" 
                depth="0.1" 
                material="src: #wallTexture; repeat: 20 10" 
            />

            <a-box 
                position="40 10 0" 
                rotation="0 -90 0" 
                width="80" 
                height="20" 
                depth="0.1" 
                material="src: #wallTexture; repeat: 20 10" 
            />

            <a-box 
                position="-40 10 0" 
                rotation="0 90 0" 
                width="80" 
                height="20" 
                depth="0.1" 
                material="src: #wallTexture; repeat: 20 10" 
            />

            <a-box 
                position="0 10 40" 
                rotation="0 180 0" 
                width="80" 
                height="20" 
                depth="0.1" 
                material="src: #wallTexture; repeat: 20 10" 
            />

            {/* Ceiling */}
            <a-plane 
                position="0 20 0" 
                rotation="90 0 0" 
                width="80" 
                height="80" 
                material="src: #ceilingTexture; repeat: 20 10" 
            />

            {/* Ceiling Lamps with Lights */}
            <a-gltf-model 
                src={lights} 
                position="-20 18 -20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="-20 5 -20"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="0 18 -20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="0 5 -20"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="20 18 -20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="20 5 -20"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="-20 18 0" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="-20 5 0"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="20 18 0" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="20 5 0"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="-20 18 20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="-20 5 20"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="0 18 20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="0 5 20"
            ></a-entity>

            <a-gltf-model 
                src={lights} 
                position="20 18 20" 
                scale="1 1 1"
            ></a-gltf-model>
            <a-entity 
                light="type: point; intensity: .5; distance: 40" 
                position="20 5 20"
            ></a-entity>

            {/* Teacher Desk */}
            <a-gltf-model 
                src={teacherDesk} 
                position="-30 1.9 0" 
                scale=".09 .09 .09"
                rotation="0 180 0"
            ></a-gltf-model>


            {/* Desks with chairs with lights and pcs */}
            <DeskEntity position="-24 0 -36" rotation="0 0 0"/>
            <DeskEntity position="-12 0 -36" rotation="0 0 0"/>
            <DeskEntity position="0 0 -36"rotation="0 0 0" />
            <DeskEntity position="12 0 -36" rotation="0 0 0"/>
            <DeskEntity position="24 0 -36" rotation="0 0 0"/>


            <DeskEntity position="-24 0 36" rotation="0 180 0"/>
            <DeskEntity position="-12 0 36" rotation="0 180 0"/>
            <DeskEntity position="0 0 36" rotation="0 180 0"/>
            <DeskEntity position="12 0 36" rotation="0 180 0"/>
            <DeskEntity position="24 0 36" rotation="0 180 0"/>

            

            {/* White Board */}
            <a-gltf-model 
                src={whiteBoard} 
                position="37 0 4" 
                scale=".04 .04 .04"
                rotation="0 90 0"
            ></a-gltf-model>
        
            {/* Projector screen */}
            <a-gltf-model 
                src={ProjectorScreen} 
                position="39.4 15 -17" 
                scale="2 3 3"
                rotation="0 0 0"
            ></a-gltf-model>
            {/* Projector  */}
            <a-gltf-model 
                src={Projector} 
                position="30 18 -17" 
                scale="5 5 5"
                rotation="0 90 0"
            ></a-gltf-model>

            {/* Shared desk */}
            <SharedDesk position='0 0 0' rotation='0 0 0'/>
            <SharedDesk position='0 0 -20' rotation='0 0 0'/>


            
        </a-scene>
    );
}

export default Lab;
