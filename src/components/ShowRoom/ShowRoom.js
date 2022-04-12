import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ShowRoom = (props) => {
  const { name, picture, price } = props.room;
  return (
    <div className="col-md-4  p-3 ">
      <div class="card-group" >
        <div class="card shadow p-3 mb-5 bg-body rounded">
          <img src={picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
             {price}
            </p>
            <p class="card-text">
             <button className="btn btn-primary">Go tO</button>
            </p>
          </div>
        </div>
      </div>
    </div>

  
  );
};

export default ShowRoom;
