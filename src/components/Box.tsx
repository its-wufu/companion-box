import * as THREE from "three";
import { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import React from "react";
import { BoxProps } from "../types";

const Box = ({ scale, width, height, setHeight, setWidth }: BoxProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [controlsActive, setControlsActive] = React.useState(false);

  const updateSize = (e: any) => {
    const newWidth = mesh.current.scale.x;
    const newHeight = mesh.current.scale.y;

    if (newWidth !== width) {
      setWidth(newWidth);
    }

    if (newHeight !== height) {
      setHeight(newHeight);
    }
  };

  return (
    <>
      <TransformControls
        object={mesh}
        mode="scale"
        onObjectChange={updateSize}
        enabled={controlsActive}
        showZ={false}
      />
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        scale={[width * scale, height * scale, 1 * scale]}
        onPointerOver={() => setControlsActive(true)}
        onPointerOut={() => setControlsActive(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#202023"} />
      </mesh>
    </>
  );
};

export default Box;
