

const Navlink = (props) => {
  if (props.varient == "active") {
    
    return (
      <div className="px-4 py-2.5 bg-(--Neutral-Black-800) text-(--Brand-Green) rounded-md">
        {props.text}
      </div>
    );
  } else if(props.varient == "footer"){ 
   <div className="w-fit text-(--Neutral-White-400)">
         {props.text}
       </div>
     
  }else {
     return (
       <div className="w-fit px-4 py-2.5 text-(--Neutral-White-400) rounded-md">
         {props.text}
       </div>
     );
  }
};

export default Navlink;