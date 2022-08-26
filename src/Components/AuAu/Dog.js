import React from 'react';
import { useEffect, useState } from "react";
import Loading from '../Loading/Loading'

import './Dog.css'



const style = {
    margin: '0 auto',
    maxHeight: '90vh',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
};

export default function Dog() {
    var [element, setDogElement] = useState(undefined);
    var [isLoading, setIsLoading] = useState(true);


    function evaluateKeyPress(event) {
        switch (event.key) {
            case 'ArrowRight':
                nextDog();
                break;
        }

    }

    useEffect(() => {
        window.addEventListener('keydown', evaluateKeyPress)
        return () => window.removeEventListener('keydown', evaluateKeyPress);
    }, [])

    useEffect(nextDog, []);

    function onLoad() {
        setIsLoading(false);
    }



    function nextDog() {
        setIsLoading(true);
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(res => {
                const url = res.url;
                if (url && (url.endsWith(".mp4") || url.endsWith('webm'))) {
                    setDogElement(<video controls={1} style={style} autoPlay={1} src={res.url}></video>);
                    onLoad();
                } else {
                    setDogElement(<img src={res.url} onError={onLoad} onLoad={onLoad} onAbort={onLoad} style={style}></img>)
                }
            })
    }
    return (
        <div  >
            <div>
                {
                    isLoading &&
                    <div className='absoluteCenter'>
                        <Loading />
                    </div >
                }
                <div style={{
                    display: !isLoading ? "block" : "none"
                }}
                > {element} </div>

            </div>
            <button className='rounded next' onClick={nextDog}> &#62; </button>
        </div >
    )
}