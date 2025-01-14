import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from './F1_2022_generic_free'; /* highlight-line */

export default function Car() {
    return (
        <div style={{height : "100vh", width: '80%', padding: '50px 0 50px 130px'}}>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: '#111a21',
                    width: '80vw',
                    height: '100vh',
                    justifyContent : 'center',
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>

    );
}