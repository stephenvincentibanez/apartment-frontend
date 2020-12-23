import React from 'react';
import Button from 'react-bootstrap/Button'

//stretch goal: adding map

const TileDetails = ({images},{title},{price},{square_feet},{bed},{bath},{description},{handleLike},{handleDislike},{back}) => {
    return (
        <div>
            <Button onClick={back}>X</Button>
            <div>
                <Button> next image </Button>   
                <div>{images}</div>
                <Button> prev image </Button>
            </div>
            <div>
                <Button onClick={handleLike}> Like </Button>
                <Button onClick={handleDislike}> Dislike </Button>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    <li>{price}</li>
                    <li>{square_feet}</li>
                    <li>{bed}</li>
                    <li>{bath}</li>
                </ul>
            </div>
        </div>
    );
}

export default TileDetails;
