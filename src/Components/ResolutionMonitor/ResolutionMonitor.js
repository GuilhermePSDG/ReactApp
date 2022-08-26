
import React from 'react';
import { useEffect, useState } from 'react';


export default function ResolutionMonitor() {
    const [size, setSize] = useState(getSizeString())
    useEffect(() => {
        window.addEventListener('resize', changeSize)
        return () => window.removeEventListener('resize', changeSize);
    }, [])

    return <span
        style={{
            position: 'fixed',
            top: '0%',
            left: '0%',
            opacity: '0.5',
            fontSize: '.7rem',
            color:'white'
        }}
    >{size}</span>;

    function changeSize() {
        setSize(getSizeString());
    }
    function getSizeString() {
        return `${window.innerWidth}x${window.innerHeight}`;
    }
}