import { useState, useEffect, useRef } from "react";
import styles from "../styles/miscComponents.module.css";

// variables
const stringBase = "fidel@developer:~$";
const wordsArray = [
  `${stringBase}Hi!`,
  `${stringBase}Hello!`,
  `${stringBase}Hola!`
];

export function HeaderAni() {
  const [currentWord, setCurrentWord] = useState(wordsArray[2]);
  // refs for both intervals
  let intervalRef1 = useRef();
  let intervalRef2 = useRef();
  let wordLoopRef = useRef(0);
  let newWordRef = useRef(true);

  useEffect(() => {
    intervalRef1.current = setInterval(() => {
      // console.log("interval 1");
      let flag = false;
      if (newWordRef.current === false) {
        setCurrentWord(state => {
          if (state.length === stringBase.length) {
            if (wordLoopRef.current === wordsArray.length) {
              // reset wordLoop to zero
              wordLoopRef.current = 0;
            } else {
              flag = true;
              return wordsArray[wordLoopRef.current];
            }
          } else {
            newWordRef.current = true;
          }
          return state;
        });
      }

      if (flag) {
        wordLoopRef.current += 1;
      }
    }, 333);

    // beginning of word
    intervalRef2.current = setInterval(() => {
      // console.log("interval 2");
      if (newWordRef.current === true) {
        setCurrentWord(state => {
          if (state.length > stringBase.length) {
            const newState = state.slice(0, -1);
            return newState;
          } else {
            newWordRef.current = false;
          }
          return state;
        });
      }
    }, 333);

    // return function to clear intervals
    return () => {
      clearInterval(intervalRef1.current);
      clearInterval(intervalRef2.current);
    };
  }, []);

  return (
    <div className={styles.main}>
      <p>{currentWord}</p>
    </div>
  );
}
