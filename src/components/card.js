import React from 'react';

function Card(props)
{
    const classes='card' + props.className;
return <div>{props.children}</div>;
}
export default Card;