/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const blogCard = (props) => {


  return (
    <div className="flex flex-col bg-(--Neutral-White-200) border border-[(--Neutral-White-300)] w-full h-full p-3 lg:p-6 rounded-lg gap-8 items-start">
      <img src={props.data.image} alt="" className="w-full h-50 object-cover" />
      <div className="flex  flex-col ">
        <h5>{props.data.title}</h5>
        <p>{props.data.subtitle}</p>

      </div>
    </div>
  );
};

export default blogCard;
