import Button from '../../../common/button';
import { useSelector, useDispatch } from 'react-redux';
import { selectResult, plus, subtract, multiplied, divided } from '../counterSlice';

function ButtonAction() {
    const dispatch = useDispatch();
    const count = useSelector(selectResult);

    const handleClick = (type:string)=>{
        const number =[];

        // checking availability of num 1 - 3
        if(count.num1.isAvailable)
            number.push(count.num1.value)
        
        if(count.num2.isAvailable)
            number.push(count.num2.value)

        if(count.num3.isAvailable)
            number.push(count.num3.value)
        
        // check if checklist less than 2
        if(number.length<2){
            alert("Error! Check up to 2 form to continue.")
        }

        switch(type){
            case "plus":
                dispatch(plus(number));
                break;               
            case "subtract":
                dispatch(subtract(number));
                break;
            case "multiplied":
                dispatch(multiplied(number));
                break;
            case "divided":
                dispatch(divided(number));
                break;
        }
    }

    return (
    <div className="flex justify-start">
        <Button 
            name="+"
            type="primary" 
            onClick={()=>handleClick("plus")}
        />
        <Button 
            name="-"
            type="error" 
            onClick={()=>handleClick("subtract")}

        />
        <Button 
            name="X"
            type="success" 
            onClick={()=>handleClick("multiplied")}

        />
        <Button 
            name="/"
            type="warning" 
            onClick={()=>handleClick("divided")}

        />
    </div>
  );
}

export default ButtonAction;
