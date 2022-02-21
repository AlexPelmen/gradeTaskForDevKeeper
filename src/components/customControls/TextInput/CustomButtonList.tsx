import * as React from "react";
import './style.css'
import $ from 'jquery'

type TextInputProps = {
    className: string,
    callback: (text: string) => void,
    defaultText?: string,
}

type TextInputState = {
    currentText: string,
}

export default class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(props: TextInputProps) {
        super(props);
        this.state = {currentText: this.props.defaultText || ''};
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className + ' custom-text-input-wrapper'}>
                <div className='custom-text-input-current-text'>{this.state.currentText || 'Пожалуйста, введите текст'}</div>
                <div className='custom-text-input-group' >
                    <input type='text' id = 'custom-text-input' placeholder='Пару слов'/>
                    <button
                        className='custom-text-button'
                        onClick={this.click.bind(this)}
                    >Ок</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // @ts-ignore
        $('#custom-text-input').on( 'keydown', this.keyDown.bind(this));
    }

    click() {
        const $input = $('#custom-text-input');
        const text: string = $input.val() + '';
        $input.val('');
        this.setState({currentText: text});
        this.props.callback(text);
    }

    keyDown(event: KeyboardEvent) {
        (event.key === 'Enter') && this.click();
    }


}
