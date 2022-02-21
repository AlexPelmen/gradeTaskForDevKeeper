import React from "react";
import './style.css';

type QuantitySelectorProps = {
    id: string,
    caption: string,
    numbers: number,
}

export default class QuantitySelector extends React.Component<QuantitySelectorProps> {
    readonly prefix = 'custom-quantity-selector-';

    constructor(props: QuantitySelectorProps) {
        super(props);
    }

    render() {
        const {id, caption} = this.props;
        return (
            <div className='custom-quantity-selector-wrapper' id={this.prefix + id}>
                <div className='custom-quantity-selector-frame'>
                    <div className='custom-quantity-selector-header' >
                        <div className='custom-quantity-selector-title'>{caption}</div>
                        <div className='custom-quantity-selector-current-number'>2</div>
                    </div>
                    <div className='custom-quantity-selector-numbers'>
                        <div className='custom-quantity-selector-item custom-quantity-selector-selected' >1</div>
                        <div className='custom-quantity-selector-item' >2</div>
                    </div>
                </div>
            </div>

        )
    }
}
