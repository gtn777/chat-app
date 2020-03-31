import React from 'react';
import ContactStyle from './ContactStyle.css'

const avatar = "https://randomuser.me/api/portraits/women/38.jpg";
const name = "Connie Lucas";
var isConnected = false ;

const Contact = () => {
    return (
    <div className='Contact' >
        <img className='avatar' src ={avatar}></img>
        <div>
            <p className='name' >{name}</p>
            <div className='status' >
                <p className={ isConnected ? 'status-online' : 'status-offline'} > </p>
                <p className='status-text'> {isConnected ? "OnLine" : "OffLine"} </p>                
            </div>
        </div>
    </div>)
    ;
};
export default Contact ;