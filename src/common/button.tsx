import { useEffect, useState } from "react";

interface iButton{
  name: string;
  onClick: ()=> void;
  type: string;
}

function Button(props: iButton) {
  const [buttonType, setButtonType] = useState("");

  useEffect(()=>{
    switch(props.type){
      case "primary":
          setButtonType("border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline");
        break;
      case "success":
          setButtonType("border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline")
        break;
      case "error":
          setButtonType("border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline")
        break;
      case "warning":
          setButtonType("border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline")
        break;
    }
  }, [props])

  return (
    <button
        onClick={()=>props.onClick()}
        type="button"
        className={buttonType}
      >
        {props.name}
      </button>
  );
}

export default Button;
