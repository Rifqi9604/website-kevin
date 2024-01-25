import React from "react";

function Cards(props) {
  return (
   
      <div className="card w-72 bg-white shadow-xl hover:transition-all ease-in-out duration-300 hover:translate-y-[-10px]">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
  );
}

export default Cards;
