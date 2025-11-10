

const Navlink = (props) => {
  if (props.varient !== "active") {
    
    return (
      <div className="px-[16px] py-[10px] bg-[var(--Neutral-Black-800)] text-[var(--Brand-Green)] rounded-md">
        {props.text}
      </div>
    );
  } else {
     return (
       <div className="px-[16px] py-[10px] text-[var(--Neutral-White-400)] rounded-md">
         {props.text}
       </div>
     );
  }
};

export default Navlink;