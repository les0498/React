import React from "react"; 
import "./Square.css";


const Square = ({ onClick, value }) => {

    return (
      //state 상태 'X' 설정
      <button className="square" 
          onClick={() => { this.props.onClick() }}> 
          {value} 
      </button>
    )

}

export default Square;
