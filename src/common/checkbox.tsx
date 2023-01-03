
interface iCheckbox {
    onChange: (value: boolean)=> any;
    isChecked: boolean;
}

function Checkbox(props: iCheckbox) {
  return (
    <div>
        <input 
          id="checkbox-1" 
          aria-describedby="checkbox-1" 
          type="checkbox" 
          onChange={(e)=>{
            props.onChange(!props.isChecked);
          }}
          className="ml-5 my-3 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded" 
          checked={props.isChecked}
        />

    </div>
  );
}

export default Checkbox;
