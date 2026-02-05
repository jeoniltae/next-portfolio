"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../../public/animation.json";

const Animation = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      // style={{ width: 720, height: 860 }}
    />
  );
};

export default Animation;
