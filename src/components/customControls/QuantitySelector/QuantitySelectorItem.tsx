import React from "react";
import './style.css';

type QuantitySelectorItemProps = {
    id: number,
    caption: number,
    isSelected: boolean,
    callback: (number: number) => void
}


export default class QuantitySelectorItem extends React.Component<QuantitySelectorItemProps> {
    constructor(props: QuantitySelectorItemProps) {
        super(props);
    }

    render() {
        const {caption, isSelected} = this.props;
        return (
            <div
                className={'custom-quantity-selector-item ' + (isSelected ? 'custom-quantity-selector-selected' : '')}
                onClick={this.click.bind(this)}
            >{caption}</div>
        )
    }

    click() {
        this.props.callback(this.props.id);
    }

}
