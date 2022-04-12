import React, { useEffect, useState } from 'react';
import ShowRoom from '../ShowRoom/ShowRoom';

const Rommes = () => {
    const[roomes,setRoomes]=useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setRoomes(data))
    },[])
    return (
      
        <div>
            <h2 className='text-center m-5'>See Our Rooms</h2>
          <div className="container">
          <div className='row'>
                {
                    roomes.map(room=><ShowRoom key={room.id} room={room}></ShowRoom>)
                }
            </div>
          </div>
        </div>
    );
};

export default Rommes;