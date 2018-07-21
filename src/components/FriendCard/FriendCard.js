// resuable friendcard component
import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
    <div classname="card" onClick={props.imageClick}>
        <div className="card" id="image" onClick={props.imageClick}>
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default FriendCard;