import React, { useContext } from 'react';
import { useState } from "react"
import "./Items.css"
import ItemsContext from './ItemsContext'

import { useForm } from "react-hook-form";

export default function ItemsForm({ children }) {
    function createEmptyItem() {
        return {
            name: '',
            description: '',
            id: (Math.round(Math.random() * 9999999)),
        };
    }
    const [item, setItem] = useState(createEmptyItem())
    const { _, dispatch } = useContext(ItemsContext)



    function submit(event) {
        event.preventDefault();
        if (!validate()) return;
        dispatch({ type: "ADD_ITEM", payload: item })
        clear();
    }

    function clear() {
        setItem(createEmptyItem());
    }

    function handleChange(event) {
        const nItem = { ...item, [event.target.name]: event.target.value };
        setItem(nItem);
    }

    function validate() {
        return true;
    }

    return (
        <>
            <div >
                <form className="form" onSubmit={submit}>
                    <div className="control">
                        <label htmlFor="name">Name</label>
                        <input
                            value={item.name}
                            onChange={handleChange}
                            name="name"
                            placeholder="Name"
                            id="name" />
                        <span></span>
                    </div>
                    <div className="control">
                        <label htmlFor="description">Description</label>
                        <input
                            value={item.description}
                            onChange={handleChange}
                            name="description"
                            placeholder="description"
                            id="description" />
                    </div>
                    <button onClick={submit} className="btn" type="submit">Add Item</button>
                </form>
                {children}
            </div>




        </>
    )
}

