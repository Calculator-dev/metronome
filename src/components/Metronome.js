import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import sound from "../sound/click1.wav"

const Metronome = () => {

    const [bpm, setBpm] = useState(100);
    const [playing, setPlaying] = useState(false);
    const soundOne = useMemo(() => new Audio(sound), []);
    const timer = useRef();
    const delay = 60000 / bpm;

    const ChangeBpm = (e) => {
        setBpm(e.target.value);
    }

    const Game = () => {
        if (!playing) {
            setPlaying(true);
            timer.current = setInterval(PlaySound, delay);
            PlaySound();
        } else {
            clearInterval(timer.current);
            setPlaying(false);
        }
    }

    const PlaySound = useCallback(() => {
        soundOne.play();
    }, [soundOne])

    useEffect(() => {
        if (playing) {
            clearInterval(timer.current);
            timer.current = setInterval(PlaySound, delay);
        } else {
            clearInterval(timer.current);
        }

    }, [PlaySound, delay, playing])



    return (

        <div className="metronome">
            <div className="bpm-slider">
                <div className="bpm">{bpm} BPM</div>
                <input
                    type="range"
                    min="40"
                    max="200"
                    value={bpm}
                    onChange={ChangeBpm}
                />
            </div>
            <button onClick={Game}>{playing ? "Stop" : "Start"}</button>
        </div>
    )
}

export default Metronome;