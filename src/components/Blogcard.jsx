/* eslint-disable no-unused-vars */
const blogCard = (props) => {
  return (
    <div className="bg-(--Neutral-White-200) border-[1px] border-[(--Neutral-White-300)] w-full h-fit p-6 rounded-lg">
      <img src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
 </div>
  );
};

export default blogCard;