import * as React from "react";
import './style.css';
import $ from 'jquery';

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
                    <img className='custom-dropdown-chevron'
                         src='img/chevron.svg'
                         alt = 'No img'
                         onClick={this.click.bind(this)}
                    />
                </div>
                <div className='custom-dropdown-content' style = {{display: 'none'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }

    click() {
        const id = this.prefix + this.props.id;
        const $content = $(`#${id} .custom-dropdown-content`);
        const $chevron = $(`#${id} .custom-dropdown-frame .custom-dropdown-chevron`);
        $content.slideToggle();
        const chevronSrc = $chevron.attr('src');
        $chevron.attr('src', chevronSrc === 'img/chevron.svg' ? 'img/chevronUp.svg' : 'img/chevron.svg');
    }
}
