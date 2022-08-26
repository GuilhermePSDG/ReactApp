import React  from 'react';

export default function User({ user }) {
    return (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 0 ',
            }}
        >
            <img
                style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '200px',
                    objectFit: 'cover'
                }}
                src={user.pictureSource}></img>
            <div
                style={{
                    marginLeft: '1rem'
                }}
            >
                <p
                    style={{
                        fontWeight: 'bold'
                    }}

                >{user.name}</p>
                <p
                    style={{
                        color: '#707070',
                        fontSize: '14px'
                    }}

                >{new Date().getFullYear() - new Date(new Date(user.birthDate).getFullYear())} years</p>
            </div>
        </div>
    )
}