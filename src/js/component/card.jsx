import React from "react";

import "../../styles/card.css";

function Card (props){
return (
    <div className="card" >
     <img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
     <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
)}
export default Card