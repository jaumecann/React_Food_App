import React, {useState} from 'react';
import Button from '../UI/Button';
import SelectAmount from '../UI/SelectAmount';

const AddAreaMain = (props) => {

const [amount, setAmount] = useState(0);

const amountInput = value => setAmount(value);

const addClickHandler = () => {
console.log(amount)
}

    return (
        <div>
            <SelectAmount amount={amountInput}>Amount </SelectAmount>
            <Button onClick={addClickHandler}>+Add</Button>
        </div>
    )
}

export default AddAreaMain