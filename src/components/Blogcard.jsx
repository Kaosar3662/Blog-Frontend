/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
const blogCard = props => {


  return (
    <div className="grid bg-(--Neutral-White-200) border-[1px] border-[(--Neutral-White-300)] w-full h-full p-6 rounded-lg gap-8">
      <img src={props.data.image} alt="" className="w-full h-50" />
      <div className="flex  flex-col">
        <h5>{props.data.title}</h5>
        <p>{props.data.subtitle}</p>
      </div>
    </div>
  );
};

export default blogCard;
