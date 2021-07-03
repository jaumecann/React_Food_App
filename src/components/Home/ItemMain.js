import React, {Fragment} from 'react';
import AddAreaMain from './AddAreaMain';
import classes from './ItemMain.module.css';

const ItemMain = (props) => {



    return (
        <Fragment>
            <div className={classes.item}>
                <div className={classes.info_block}>
                <h3>{props.item.Name}</h3>
                <p><i>{props.item.Desc}</i></p>
                <p>{props.item.Price}€</p>
                </div>
                <AddAreaMain item={props.item}/>
            </div>          
        </Fragment>
    )
}

export default ItemMain