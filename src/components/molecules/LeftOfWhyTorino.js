"use client"
import { useState } from "react";
import WhyTorinoNextStep from "../atoms/HomePageAtoms/WhyTorinoNextStep";
import WhyTorinoSlider from "../atoms/HomePageAtoms/WhyTorinoSlider";

import styles from "@/styles/WhyTorino.module.css"

function LeftOfWhyTorino() {
  const [slider, setSlider] = useState(1);

  return (
    <div className={styles.box}>
      <WhyTorinoSlider slider={slider} />
      <WhyTorinoNextStep slider={slider} setSlider={setSlider} />
    </div>
  );
}

export default LeftOfWhyTorino;
