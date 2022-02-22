import React from "react";
import './style.css';
import QuantitySelectorItem from "./QuantitySelectorItem";
import {store} from "../../../store";

type QuantitySelectorProps = {
    caption: string,
    numbers: number,
    selectedNumber: number,
    className: string,
    callback: (number: number) => void
}

type QuantitySelectorState = {
    selectedNumber: number,
}

export default class QuantitySelector extends React.Component<QuantitySelectorProps, QuantitySelectorState> {
    constructor(props: QuantitySelectorProps) {
        super(props);
        this.state = {selectedNumber: this.props.selectedNumber}
        store.subscribe(() => {
            const newQuantity = store.getState().editor.quantity
            this.setState({selectedNumber: newQuantity})
        })
    }

    render() {
        const {className, caption, callback} = this.props;
        return (
            <div className={className + ' custom-quantity-selector-wrapper'} >
                <div className='custom-quantity-selector-frame'>
                    <div className='custom-quantity-selector-header' >
                        <div className='custom-quantity-selector-title'>{caption}</div>
                        <div className='custom-quantity-selector-current-number'>{this.state.selectedNumber}</div>
                    </div>
                    <div className='custom-quantity-selector-numbers'>
                        {this.getNumbers(callback)}
                    </div>
                </div>
            </div>
        )
    }

    getNumbers(callback: (number: number) => void) {
        const batchHTML = [];
        for(let number = 1; number < this.props.numbers + 1; number++) {
            const isSelected = number === this.state.selectedNumber;
            batchHTML.push(<QuantitySelectorItem
                caption={number}
                id={number}
                isSelected={isSelected}
                callback={callback}
            />);
        }
        
        return batchHTML;
    }
}
