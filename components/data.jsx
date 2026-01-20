    import React from "react";

    const Data = ({title, desc}) =>{

    return (
        <div className="data-card">
        <h2>{title}</h2>
        <p>{desc}</p>
        </div>
    );

    }

    export default Data;