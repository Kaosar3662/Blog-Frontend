import React from 'react';

const SocialLink = props => {
  return (
    <div className="bg-[var(--Neutral-White)] w-fit h-fit p-[8px] rounded-full">
      <a href={props.link} target="_blank">
        <img src={props.src} alt="Icon" width={'20px'}  />
      </a>
    </div>
  );
};

export default SocialLink;
