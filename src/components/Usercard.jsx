import React from "react";

const Usercard = (props) =>{
    console.log(props.data);
    return(
        <div className="user-card">
            <img className="user-image"/>
            <h2>{props.data.name.first}</h2>
            <p>{props.data.email}</p>
            <p>{props.data.dob.date}</p>
        </div>
    );
}

export default Usercard;