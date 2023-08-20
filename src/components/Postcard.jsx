import React from "react";

const Postcard = (props) =>{
    return(
        <div className="postcard">
        <h2>{props.id}</h2>
        <p>{props.title}</p>
        <h4>{props.body}</h4>
        </div>
    );
}

export default Postcard;