import * as React from "react";
import './style.css';
import $ from 'jquery'

type CustomCheckBoxProps = {
    id: string,
    name: string,
    value: string,
    callback: (checked: boolean) => void
}

export default class CustomCheckBox extends React.Component<CustomCheckBoxProps> {
    readonly prefix = 'custom-checkbox-';

    constructor(props: CustomCheckBoxProps) {
        super(props);
    }

    render() {
        const {id, name, value, children} = this.props;
        return (
            <div >
                <input
                    type="checkbox"
                    className='custom-checkbox'
                    id={this.prefix + id}
                    name={name} value={value}
                    onInput={this.input.bind(this)}
                />
                <label className='custom-checkbox-label header-font' htmlFor={this.prefix + id} >{children}</label>
            </div>
        )
    }

    input() {
        const value = $('.custom-checkbox').is(':checked');
        this.props.callback(value);
    }
}
