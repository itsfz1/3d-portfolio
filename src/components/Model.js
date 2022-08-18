import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/model.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Action.002"].play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" userData={{ name: "Armature" }}>
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
            userData={{
              targetNames: [
                "mouthOpen",
                "mouthSmile",
                "eyesClosed",
                "eyesLookUp",
                "eyesLookDown",
                "viseme_sil",
                "viseme_PP",
                "viseme_FF",
                "viseme_TH",
                "viseme_DD",
                "viseme_kk",
                "viseme_CH",
                "viseme_SS",
                "viseme_nn",
                "viseme_RR",
                "viseme_aa",
                "viseme_E",
                "viseme_I",
                "viseme_O",
                "viseme_U",
                "eyeBlinkLeft",
                "eyeLookDownLeft",
                "eyeLookInLeft",
                "eyeLookOutLeft",
                "eyeLookUpLeft",
                "eyeSquintLeft",
                "eyeWideLeft",
                "eyeBlinkRight",
                "eyeLookDownRight",
                "eyeLookInRight",
                "eyeLookOutRight",
                "eyeLookUpRight",
                "eyeSquintRight",
                "eyeWideRight",
                "jawForward",
                "jawLeft",
                "jawRight",
                "jawOpen",
                "mouthClose",
                "mouthFunnel",
                "mouthPucker",
                "mouthLeft",
                "mouthRight",
                "mouthSmileLeft",
                "mouthSmileRight",
                "mouthFrownLeft",
                "mouthFrownRight",
                "mouthDimpleLeft",
                "mouthDimpleRight",
                "mouthStretchLeft",
                "mouthStretchRight",
                "mouthRollLower",
                "mouthRollUpper",
                "mouthShrugLower",
                "mouthShrugUpper",
                "mouthPressLeft",
                "mouthPressRight",
                "mouthLowerDownLeft",
                "mouthLowerDownRight",
                "mouthUpperUpLeft",
                "mouthUpperUpRight",
                "browDownLeft",
                "browDownRight",
                "browInnerUp",
                "browOuterUpLeft",
                "browOuterUpRight",
                "cheekPuff",
                "cheekSquintLeft",
                "cheekSquintRight",
                "noseSneerLeft",
                "noseSneerRight",
                "tongueOut",
              ],
              name: "EyeLeft.001",
            }}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
            userData={{
              targetNames: [
                "mouthOpen",
                "mouthSmile",
                "eyesClosed",
                "eyesLookUp",
                "eyesLookDown",
                "viseme_sil",
                "viseme_PP",
                "viseme_FF",
                "viseme_TH",
                "viseme_DD",
                "viseme_kk",
                "viseme_CH",
                "viseme_SS",
                "viseme_nn",
                "viseme_RR",
                "viseme_aa",
                "viseme_E",
                "viseme_I",
                "viseme_O",
                "viseme_U",
                "eyeBlinkLeft",
                "eyeLookDownLeft",
                "eyeLookInLeft",
                "eyeLookOutLeft",
                "eyeLookUpLeft",
                "eyeSquintLeft",
                "eyeWideLeft",
                "eyeBlinkRight",
                "eyeLookDownRight",
                "eyeLookInRight",
                "eyeLookOutRight",
                "eyeLookUpRight",
                "eyeSquintRight",
                "eyeWideRight",
                "jawForward",
                "jawLeft",
                "jawRight",
                "jawOpen",
                "mouthClose",
                "mouthFunnel",
                "mouthPucker",
                "mouthLeft",
                "mouthRight",
                "mouthSmileLeft",
                "mouthSmileRight",
                "mouthFrownLeft",
                "mouthFrownRight",
                "mouthDimpleLeft",
                "mouthDimpleRight",
                "mouthStretchLeft",
                "mouthStretchRight",
                "mouthRollLower",
                "mouthRollUpper",
                "mouthShrugLower",
                "mouthShrugUpper",
                "mouthPressLeft",
                "mouthPressRight",
                "mouthLowerDownLeft",
                "mouthLowerDownRight",
                "mouthUpperUpLeft",
                "mouthUpperUpRight",
                "browDownLeft",
                "browDownRight",
                "browInnerUp",
                "browOuterUpLeft",
                "browOuterUpRight",
                "cheekPuff",
                "cheekSquintLeft",
                "cheekSquintRight",
                "noseSneerLeft",
                "noseSneerRight",
                "tongueOut",
              ],
              name: "EyeRight.001",
            }}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
            userData={{
              targetNames: [
                "mouthOpen",
                "mouthSmile",
                "eyesClosed",
                "eyesLookUp",
                "eyesLookDown",
                "viseme_sil",
                "viseme_PP",
                "viseme_FF",
                "viseme_TH",
                "viseme_DD",
                "viseme_kk",
                "viseme_CH",
                "viseme_SS",
                "viseme_nn",
                "viseme_RR",
                "viseme_aa",
                "viseme_E",
                "viseme_I",
                "viseme_O",
                "viseme_U",
                "eyeBlinkLeft",
                "eyeLookDownLeft",
                "eyeLookInLeft",
                "eyeLookOutLeft",
                "eyeLookUpLeft",
                "eyeSquintLeft",
                "eyeWideLeft",
                "eyeBlinkRight",
                "eyeLookDownRight",
                "eyeLookInRight",
                "eyeLookOutRight",
                "eyeLookUpRight",
                "eyeSquintRight",
                "eyeWideRight",
                "jawForward",
                "jawLeft",
                "jawRight",
                "jawOpen",
                "mouthClose",
                "mouthFunnel",
                "mouthPucker",
                "mouthLeft",
                "mouthRight",
                "mouthSmileLeft",
                "mouthSmileRight",
                "mouthFrownLeft",
                "mouthFrownRight",
                "mouthDimpleLeft",
                "mouthDimpleRight",
                "mouthStretchLeft",
                "mouthStretchRight",
                "mouthRollLower",
                "mouthRollUpper",
                "mouthShrugLower",
                "mouthShrugUpper",
                "mouthPressLeft",
                "mouthPressRight",
                "mouthLowerDownLeft",
                "mouthLowerDownRight",
                "mouthUpperUpLeft",
                "mouthUpperUpRight",
                "browDownLeft",
                "browDownRight",
                "browInnerUp",
                "browOuterUpLeft",
                "browOuterUpRight",
                "cheekPuff",
                "cheekSquintLeft",
                "cheekSquintRight",
                "noseSneerLeft",
                "noseSneerRight",
                "tongueOut",
              ],
              name: "Wolf3D_Head.001",
            }}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
            userData={{ name: "Wolf3D_Hair.001" }}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
            userData={{
              targetNames: [
                "mouthOpen",
                "mouthSmile",
                "eyesClosed",
                "eyesLookUp",
                "eyesLookDown",
                "viseme_sil",
                "viseme_PP",
                "viseme_FF",
                "viseme_TH",
                "viseme_DD",
                "viseme_kk",
                "viseme_CH",
                "viseme_SS",
                "viseme_nn",
                "viseme_RR",
                "viseme_aa",
                "viseme_E",
                "viseme_I",
                "viseme_O",
                "viseme_U",
                "eyeBlinkLeft",
                "eyeLookDownLeft",
                "eyeLookInLeft",
                "eyeLookOutLeft",
                "eyeLookUpLeft",
                "eyeSquintLeft",
                "eyeWideLeft",
                "eyeBlinkRight",
                "eyeLookDownRight",
                "eyeLookInRight",
                "eyeLookOutRight",
                "eyeLookUpRight",
                "eyeSquintRight",
                "eyeWideRight",
                "jawForward",
                "jawLeft",
                "jawRight",
                "jawOpen",
                "mouthClose",
                "mouthFunnel",
                "mouthPucker",
                "mouthLeft",
                "mouthRight",
                "mouthSmileLeft",
                "mouthSmileRight",
                "mouthFrownLeft",
                "mouthFrownRight",
                "mouthDimpleLeft",
                "mouthDimpleRight",
                "mouthStretchLeft",
                "mouthStretchRight",
                "mouthRollLower",
                "mouthRollUpper",
                "mouthShrugLower",
                "mouthShrugUpper",
                "mouthPressLeft",
                "mouthPressRight",
                "mouthLowerDownLeft",
                "mouthLowerDownRight",
                "mouthUpperUpLeft",
                "mouthUpperUpRight",
                "browDownLeft",
                "browDownRight",
                "browInnerUp",
                "browOuterUpLeft",
                "browOuterUpRight",
                "cheekPuff",
                "cheekSquintLeft",
                "cheekSquintRight",
                "noseSneerLeft",
                "noseSneerRight",
                "tongueOut",
              ],
              name: "Wolf3D_Teeth.001",
            }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
            userData={{ name: "Wolf3D_Outfit_Top.001" }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
            userData={{ name: "Wolf3D_Outfit_Footwear.001" }}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
            userData={{ name: "Wolf3D_Outfit_Bottom.001" }}
          />
        </group>
        <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} userData={{ name: "cs_master" }} />
        <group
          name="cs_square_2"
          position={[0.5, 1.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.15}
          userData={{ name: "cs_square_2" }}
        />
        <group
          name="cs_square"
          position={[1.5, 1.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.15}
          userData={{ name: "cs_square" }}
        />
        <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.21} userData={{ name: "cs_hips" }} />
        <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.21} userData={{ name: "cs_circle" }} />
        <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.21} userData={{ name: "cs_neck" }} />
        <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.21} userData={{ name: "cs_head" }} />
        <group
          name="cs_shoulder_left"
          position={[0.5, 15.5, 0]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={1.04}
          userData={{ name: "cs_shoulder_left" }}
        />
        <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.82} userData={{ name: "cs_arm_fk" }} />
        <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.82} userData={{ name: "cs_forearm_fk" }} />
        <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.21} userData={{ name: "cs_sphere_012" }} />
        <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.21} userData={{ name: "cs_sphere" }} />
        <group
          name="cs_hand"
          position={[0.5, 19.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.31}
          userData={{ name: "cs_hand" }}
        />
        <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.21} userData={{ name: "cs_circle_025" }} />
        <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.21} userData={{ name: "cs_circle.001" }} />
        <group
          name="cs_shoulder_right"
          position={[0.5, 16.5, 0]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={1.04}
          userData={{ name: "cs_shoulder_right" }}
        />
        <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.82} userData={{ name: "cs_thigh_fk" }} />
        <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.82} userData={{ name: "cs_calf_fk" }} />
        <group
          name="cs_foot"
          position={[0.5, 10.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.31}
          userData={{ name: "cs_foot" }}
        />
        <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.59} userData={{ name: "cs_foot_roll" }} />
        <group
          name="cs_foot001"
          position={[0.5, 10.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.31}
          userData={{ name: "cs_foot.001" }}
        />
        <group
          name="cs_foot_01"
          position={[0.5, 18.5, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={2.19}
          userData={{ name: "cs_foot_01" }}
        />
        <group
          name="cs_foot002"
          position={[0.5, 10.5, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.31}
          userData={{ name: "cs_foot.002" }}
        />
        <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.43} userData={{ name: "cs_toe" }} />
      </group>
    </group>
  )
}

useGLTF.preload("/model.glb")
