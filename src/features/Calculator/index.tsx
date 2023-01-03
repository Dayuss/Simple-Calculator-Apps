import Form from './component/form';
import ButtonAction from './component/buttonAction';
import { useSelector } from 'react-redux';
import { selectResult } from './counterSlice';

function Calculator() {
const count = useSelector(selectResult);
  return (
    <>
        <Form/>
        <ButtonAction/>
        <div className="mr-[3.5em]">
            <hr className='my-5'/>
            <div className="flex justify-between">
                <p>Hasil: </p>
                <p>{count.result}</p>
            </div>
        </div>
    </>
  );
}

export default Calculator;
