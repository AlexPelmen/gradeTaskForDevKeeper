import * as React from "react";
import './style.css'

type CustomButtonListItemProps = {
    id: number,
    option: string,
    isSelected: boolean,
    callback: (id: number) => void
}

export default class CustomButtonListItem extends React.Component<CustomButtonListItemProps> {
    constructor(props: CustomButtonListItemProps) {
        super(props);
    }

    render() {
        const {id, option, isSelected} = this.props;
        let classes = 'custom-button-list-item' + (isSelected ? ' custom-button-list-item-selected' : '');

        return <li className={classes} value={id} onClick={this.click.bind(this)}>{option}</li>
    }

    click() {
        this.props.callback(this.props.id);
    }
}
