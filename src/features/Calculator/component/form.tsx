import Input from '../../../common/input';
import Checkbox from '../../../common/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { selectResult, setNum1, setNum2, setNum3 } from '../counterSlice';

function Form() {
    const count = useSelector(selectResult);
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center flex-col">
            <div className="flex">
                <Input onChange={(value)=>{
                    dispatch(setNum1({
                        isAvailable: count.num1.isAvailable,
                        value: value
                    }))
                }} />
                <Checkbox 
                    onChange={(value)=>{
                        dispatch(setNum1({
                            value:count.num1.value,
                            isAvailable: value
                        }));

                    }} 
                    isChecked={count.num1.isAvailable} 
                />
            </div>
            <div className="flex">
                <Input onChange={(value)=>{
                    dispatch(setNum2({
                        isAvailable: count.num2.isAvailable,
                        value: value
                    }))
                }} />
                <Checkbox 
                    onChange={(value)=>{
                        dispatch(setNum2({
                            value:count.num2.value,
                            isAvailable: value
                        }));

                    }} 
                    isChecked={count.num2.isAvailable} 
                />
            </div>
            <div className="flex">
                <Input onChange={(value)=>{
                    dispatch(setNum3({
                        isAvailable: count.num3.isAvailable,
                        value: value
                    }))
                }} />
                <Checkbox 
                    onChange={(value)=>{
                        dispatch(setNum3({
                            value:count.num3.value,
                            isAvailable: value
                        }));

                    }} 
                    isChecked={count.num3.isAvailable} 
                />
            </div>
        </div>
    );
}

export default Form;
