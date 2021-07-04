import React, {useContext, useState} from 'react';
import cartItemContext from '../../context/cartitem-context';
import Button from '../UI/Button';
import SelectAmount from '../UI/SelectAmount';

const AddAreaMain = (props) => {

const [amount, setAmount] = useState(1);

const amountInput = value => setAmount(value);

const cartCtx = useContext(cartItemContext)

const addClickHandler = () => {
cartCtx.onAdd(props.item, amount)
}

    return (
        <div>
            <SelectAmount amount={amountInput}>Amount </SelectAmount>
            <Button onClick={addClickHandler}>+Add</Button>
        </div>
    )
}

export default AddAreaMain