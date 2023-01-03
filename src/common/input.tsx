
interface iInput {
    onChange: (value: number)=> any;
}

function Input(props: iInput) {
  return (
    <div>
        <input 
            onChange={(e)=>{props.onChange(parseInt(e.target.value))}}
            className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none   hover:border-yellow-500 " 
            type="number" 
            placeholder="" 
        />
    </div>
  );
}

export default Input;
