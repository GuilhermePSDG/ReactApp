import React from 'react';
import SingleItem from './SingleItem'
import { useEffect, useRef, useState } from "react"

export default function Items({ source }) {

    const [filtredSource, setFiltredSource] = useState(source);
    const searchInputRef = useRef(null);
    useEffect(queryChange, [source]);

    function queryChange() {
        if (source.length <= 0) {
            setFiltredSource([]);
            return;
        }
        const value = (searchInputRef?.current?.value ?? '').toString().toLowerCase();
        setFiltredSource(() => filterArray(source, (x) => x.toString().toLowerCase().includes(value)))
    }

    function filterArray(source, compare) {
        if (source.length === 0) return source;
        const keys = Object.keys(source[0]);
        return source.filter(element => {
            for (var i = 0; i < keys.length; i++) {
                const value = element[keys[i]];
                if (compare(value))
                    return true;
            }
            return false;
        })
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '0 auto',
        gap: '10px',
        padding: '10px'
    }}>
        {
            source.length > 1 &&
            <div style={{ margin: '0 auto' }}>
                <input ref={searchInputRef} onChange={queryChange} placeholder="Search"></input>
            </div>
        }
        {filtredSource.map(x => <SingleItem key={x.id} item={x}>
        </SingleItem>)}
    </div>
}