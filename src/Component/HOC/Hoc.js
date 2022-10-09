import React from "react"

export const HOCWhite = (props) => {
  return(
        <div style={{backgroundColor:'#fffff0', color:"red"}}>
            <props.cmp img={props.img} />
        </div>
  )
}

export const HOC = (props) => {
  return(
        <div style={{backgroundColor:'#FFA500', color:"white"}}>
            <props.cmp img={props.img} />
        </div>
  )
}



