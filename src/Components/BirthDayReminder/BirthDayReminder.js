import React from 'react';
import { useState } from 'react';
import User from './User'
import { data } from './data'

export default function BirthDayReminder() {
    const [filtredUsers, setfiltredUsers] = useState(data.filter(x => true));
    return (
        <div style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <div style={{
            }}
                className="card"
            >
                <h3
                    style={{
                        fontWeight: '500',
                        fontSize: '26px',
                        marginBottom: '20px',
                    }}
                >{filtredUsers.length} birthdays today <span style={{ color: '#bbbbbb', fontSize: 'small', }}>(fake)</span></h3>


                {filtredUsers.map((u) => <User key={u.id} user={u} />)}

                <button
                    style={{ marginTop: '20px' }}
                    className='btn'
                    disabled={filtredUsers.length === 0}
                    onClick={() => setfiltredUsers([])}
                >Clear</button>
            </div >
        </div >
    )
}

