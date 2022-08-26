import React, { useEffect, useState } from 'react';
import ItemsContext from './ItemsContext'
import { useContext } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Items({ item }) {

    const dispatch = useContext(ItemsContext).dispatch

    useEffect(() => setCpItem(item), [item])


    const [cpItem, setCpItem] = useState(item);

    const [editEnabled, setEditEnabled] = useState(false);

    function handleChange(event) {
        setCpItem({ ...cpItem, [event.target.name]: event.target.value });
    }

    function confirmEdit() {
        dispatch({ type: 'UPDATE_ITEM', payload: cpItem })
        setEditEnabled(false);
    }
    function cancelEdit() {
        setCpItem(item);
        setEditEnabled(false);
    }

    function remove() {
        dispatch({ type: 'REMOVE_ITEM', payload: cpItem.id })
    }

    const togleEdit = () => setEditEnabled(!editEnabled)

    return (
        <div
            className='card'
            style={{
                margin: '0 auto',
                display: 'grid',
                gridTemplateAreas:
                    `"a c"
                     "b c"`,
            }}
        >
            <input
                className='reset'
                value={cpItem.name}
                disabled={!editEnabled}
                name='name'
                onChange={handleChange}
                style={{
                    textOverflow: 'ellipsis',
                    border: '1px dotted transparent',
                    fontWeight: 'bold',
                    ...(editEnabled ? {
                        border: '1px dotted #d8d8d8',
                    } : {})
                }} />


            <input
                className='reset'
                value={cpItem.description}
                disabled={!editEnabled}
                name='description'
                onChange={handleChange}
                style={
                    {
                        textOverflow: 'ellipsis',
                        border: '1px dotted transparent',
                        fontWeight: '300',
                        fontSize: '12px',
                        ...(editEnabled ? {
                            border: '1px dotted #d8d8d8'
                        } : {})
                    }
                }
            />

            <div style={{
                gridArea: 'c',
                'display': 'flex',
                'justifyContent': 'end',
                'alignItems': 'center'
            }}>
                {editEnabled ?

                    <>
                        <span className="material-symbols-outlined btn ico" onClick={confirmEdit} style={{ 'color': 'yellowgreen' }}> check </span>
                        <span className="material-symbols-outlined btn ico" onClick={cancelEdit} style={{ 'color': 'red' }}> close </span>
                    </>
                    :
                    <>
                        <span className="material-symbols-outlined btn ico" onClick={remove} style={{ 'color': 'red' }}> delete </span>
                        <span className="material-symbols-outlined btn ico" onClick={togleEdit} style={{ 'color': '' }}> edit</span>
                    </>
                }


            </div>
        </div>
    )
}

Items.propTypes =
{
    item: PropTypes.object.isRequired
}