import * as React from "react";
import './style.css'
import {MaterialEnum} from "../../../types/enums";

type MaterialPickerItemProps = {
    id: MaterialEnum,
    isSelected: boolean,
    texture?: string,
    color?: string,
    callback: (id: MaterialEnum) => void,
}

export default class MaterialPickerItem extends React.Component<MaterialPickerItemProps> {
    constructor(props: MaterialPickerItemProps) {
        super(props);
    }

    render() {
        const {id, isSelected, texture, color} = this.props;
        let classes = 'material-picker-list-item' + (isSelected ? ' material-picker-list-item-selected' : '');
        const style = texture ?
            {background: `url('${texture}')`} :
            {backgroundColor: color};

        return <li className={classes} key={id} value={id} >
            <div className='material-picker-list-item-picture' style={style} onClick={this.click.bind(this)} />
        </li>
    }

    click() {
        this.props.callback(this.props.id);
    }
}
