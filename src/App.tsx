import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import styled from "styled-components";
import Menu from "./components/Menu";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { OrbitControls as controlRef } from "three-stdlib";

function App() {
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(3);
  const [scale, setScale] = useState(1);

  const controls = useRef<controlRef>(null!);

  const handleReset = () => {
    controls.current.reset();
  };

  const config = {
    width,
    height,
    scale,
  };

  const setter = {
    setWidth,
    setHeight,
    setScale,
  };

  return (
    <Container>
      <Menu {...config} {...setter} />
      <CanvasBox>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box scale={scale} width={width} height={height} {...setter} />
          <OrbitControls makeDefault ref={controls} />
        </Canvas>
        <ResetButtonBox>
          <RotateLeftIcon onClick={handleReset} />
        </ResetButtonBox>
      </CanvasBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: row;
`;

const CanvasBox = styled.div`
  position: relative;
  display: flex;
  flex: 4;
  background-color: #eeeee4;
`;

const ResetButtonBox = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  transform: rotate(20deg);

   {
    transition: 200ms ease;
  }

  &:hover {
    transform: rotate(-20deg);
  }
`;

export default App;
