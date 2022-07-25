//LAURA FERREIRA 2018-2963

import './index.css';
import {Suspense, useRef,useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0,-1.25,0]} scale={1.5}>
        <group position={[0, 0, 1.64]} rotation={[-Math.PI / 2, -0.76, 0]} scale={1.8}>
          <mesh geometry={nodes['llightbulb-incand_0'].geometry} material={materials.bulbglass} />
          <mesh geometry={nodes['llightbulb-incand_1'].geometry} material={materials.bulbbase} />
          <mesh geometry={nodes['llightbulb-incand_1_1'].geometry} material={materials.bulbbase} />
          <mesh geometry={nodes['llightbulb-incand_1_2'].geometry} material={materials.bulbbase} />
          <mesh geometry={nodes['llightbulb-incand_1_3'].geometry} material={materials.bulbbase} />
          <mesh geometry={nodes['llightbulb-incand_1_4'].geometry} material={materials.bulbbase} />
          <mesh geometry={nodes['llightbulb-incand_2'].geometry} material={materials['Material.003']} />
          <mesh geometry={nodes['llightbulb-incand_3'].geometry} material={materials.contact} />
          <mesh geometry={nodes['llightbulb-incand_4'].geometry} material={materials.Bulbinterior} />
        </group>
        <group position={[0, -4.78, 0]} />
        <mesh geometry={nodes.LampOrange_0.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange_1.geometry} material={materials.PBR_Body} />
        <mesh geometry={nodes.LampOrange_2.geometry} material={materials.Shade} material-color={props.customModels.shaders}  />
        <group position={[0.08, 0, 1.08]}>
          <mesh geometry={nodes.shadeholder_0.geometry} material={materials.PBR_Brass} />
        </group>
        <group position={[0.01, 0, 0.81]} />
        <group position={[0, 0, 0.96]}>
          <mesh geometry={nodes.tube_0.geometry} material={materials.PBR_Metal} />
        </group>
        <group position={[0, 0, 1.16]} rotation={[0, 0, 0.76]}>
          <mesh geometry={nodes.BULHOLDERBASE_0.geometry} material={materials.PBR_Brass} />
        </group>
        <group position={[0, 0, 1.36]} rotation={[0, 0, 0.76]}>
          <mesh geometry={nodes.BULBHOLDERTOP_0.geometry} material={materials.PBR_Brass}  />
        </group>
        <group position={[0.08, 0.09, 1.25]} rotation={[-1.57, 0.81, 1.57]} scale={[0.03, 0.03, 0.11]}>
          <mesh geometry={nodes.switch_0.geometry} material={materials['Material.002']} />
        </group>
        <group position={[0, 0, 1.08]} scale={[0.07, 0.07, 0.09]}>
          <mesh geometry={nodes.shadeholderbase_0.geometry} material={materials.PBR_Brass}  />
        </group>
        <group position={[-0.01, 0, 2.37]} scale={0.12}>
          <mesh geometry={nodes.uppershaderim001_0.geometry} material={materials['Shade.001']} />
        </group>
        <group position={[-0.01, 0, 2.37]} scale={0.12}>
          <mesh geometry={nodes.uppershaderim002_0.geometry} material={materials.PBR_Brass} />
        </group>
        <mesh geometry={nodes.LampOrange001_0.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange001_0_1.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange001_0_2.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange001_0_3.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange001_0_4.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange001_0_5.geometry} material={materials['Shade.001']} />
        <mesh geometry={nodes.LampOrange002_0.geometry} material={materials.PBR_Body} material-color={props.customModels.neck} />
        <mesh geometry={nodes.LampOrange003_0.geometry} /*material={materials.PBR_Metal}*/ material-color={props.customModels.base} />
      </group>
    </group>
  )
}


function App() {
  const [shaders,setShaders]= useState("#DEB887");
  const [neck,setNeck]= useState("#FF4500");
  const [base,setBase]= useState("#A8A9AD");
  var [price,setPrice]= useState(10.00);

  const precioLamp=()=>{
    var min = 10.00;
    var max = 20.36;
    var price=Math.random()*(max - min)+min;
    setPrice(price.toFixed(2));
  };


  return (
    <div className="App">
    <div className="wrapper">
        <div >
            <div class="product-canvas">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight/>
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]}
                  castShadow/>
                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                  <Model customModels={{shaders:shaders, neck:neck, base:base}}/>
                </Suspense>
              </Canvas>
            </div>
            <h2 id="price">${price}</h2>
            <div class='colors'>
                 <div>
                    <input type="color" id="shaders" name="shaders"
                           value={shaders}
                           onChange={(e)=>{setShaders(e.target.value);precioLamp();}}
                            />
                    <label for="shaders">Shade</label>
                  </div>

                <div>
                    <input type="color" id="neck" name="neck"
                            value={neck}
                            onChange={(e)=>{setNeck(e.target.value);precioLamp();}} />
                    <label for="neck">Neck</label>
                </div>
                 <div>
                    <input type="color" id="base" name="base"
                            value={base}
                            onChange={(e)=>{setBase(e.target.value);precioLamp();}} />
                    <label for="base">Base</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;