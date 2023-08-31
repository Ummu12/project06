import React from "react";

export const Car=({title, data})=>{
    return(
          <div className="child">
          <h3>{title}</h3>
          <ul>
          {data.map((item)=>(
            <li>{item}</li>

          )   
            )}
          </ul>
          </div>
    )
}