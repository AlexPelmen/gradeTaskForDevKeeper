import * as React from "react";

type DropdownProps = {
    id: string,
    caption: string,
}

export default class Dropdown extends React.Component<DropdownProps> {
    readonly prefix = 'custom-dropdown-';
    render() {
        const {id, caption} = this.props;
        return (
            <div className='custom-dropdown-wrapper' id={this.prefix + id}>
                <div className='custom-dropdown-frame'>
                    <div className='custom-dropdown-title'>{caption}</div>
                    <img className='custom-dropdown-chevron' src='img/chevron.svg' alt = 'No img'/>
                </div>
                <div className='custom-dropdown-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
