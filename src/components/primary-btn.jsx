
const primaryBtn = (props) => {
 
  return (

    <button onClick={props.Click} type={props.type} className={`flex px-4 py-2.5 bg-(--Brand-Green) rounded-md justify-center cursor-pointer hover:bg-(--Brand-Green)/80 ${props.className} `}>
      {props.btnTitle}

    </button>
  );
};

export default primaryBtn;