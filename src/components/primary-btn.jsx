
const primaryBtn = (props) => {
 
  return (

    <button onClick={props.Click} type={props.type} className=" flex px-[16px] py-[10px] bg-[var(--Brand-Green)] rounded-md justify-center cursor-pointer hover:bg-white" >
      {props.btnTitle}

    </button>
  );
};

export default primaryBtn;