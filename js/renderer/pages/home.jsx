import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import anime from 'animejs';
import styles from '../styles/Home.module.css';
function Home() {
  const router = useRouter();
  const [step, setStep] = React.useState(-2);
  const [timesRan, setTR] = React.useState(0);
  useEffect(() => {
    const desktopPath = path.join(require('os').homedir(), 'Desktop');
    const filePath = path.join(desktopPath, 'presentStep.txt');
    if (fs.existsSync(filePath)) {
      console.log("fileExists")
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("fileData: " + data);
          const stepact = parseInt(data);
          setStep(stepact)
        }
      })
    } else {
      setStep(-1)
    }
  }, [router.isReady])

  useEffect(() => {
    if (timesRan == 0 && step != -2) {
      setTR(1)
      nextStep(true)
      return;
    } else {
      return;
    }
  }, [step])

  function nextStep(flag) {
    const desktopPath = path.join(require('os').homedir(), 'Desktop');
  const filePath = path.join(desktopPath, 'presentStep.txt');
    console.log("nextStep: step" + step)
    const stepInt = parseInt(step);
    const stepAdded = stepInt + 1;
    const stepString = stepAdded.toString();
    console.log(stepAdded + " stepAdded")
    if (flag) {
      console.log("Flag")
      setStep(stepInt + 1)
      console.log("stepString: " + stepString)
      fs.writeFile(filePath, stepString, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Written: " + stepAdded);
        }
      })
    }
    const step0 = document.getElementById("0");
    const step0video = document.getElementById("step0video");
    const step1 = document.getElementById("1");
    const step1video = document.getElementById("step1video");
    if ((stepInt + 1) == 0) {
      step0.style.display = "block"
    } else if ((stepInt + 1) == 1) {
      step0video.play()
    } else if ((stepInt + 1) == 2) {
      step1.style.display = "block"
      step1video.play()
    }
  }
  return (<React.Fragment>
    <Head>
      <title>Presentation</title>
    </Head>
    <div onClick={() => nextStep(true)}>
      <div id="0" style={{ display: "none" }}>
        <video id="step0video" className={styles.fullScreenVideo}><source type="video/mp4" src="https://assets.rygb.tech/mainassets/assets/mgrintro-rygbshow.mp4"></ source></video>
      </div>
      <div id="1" style={{ display: "none" }}>
        <video id="step1video" className={styles.fullScreenVideo}><source type="video/mp4" src="https://assets.rygb.tech/mainassets/assets/kioskintro-rygbshow.mp4"></ source></video>
      </div>
    </div>
  </React.Fragment>);
}
export default Home;
