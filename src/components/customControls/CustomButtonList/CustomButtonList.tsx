import * as React from "react";
import './style.css'
import CustomButtonListItem from "./CustomButtonListItem";

type CustomButtonListProps = {
    className: string,
    options: string[],
    selectedID: number,
    callback: (id: number) => void
}

type CustomButtonListState = {
    selectedID: number,
}

export default class CustomButtonList extends React.Component<CustomButtonListProps, CustomButtonListState> {
    constructor(props: CustomButtonListProps) {
        super(props);
        this.state = {
            selectedID: this.props.selectedID,
        }
    }

    render() {
        const {className, options} = this.props;
        const selectedID = this.state.selectedID;
        return (
            <div className={className + ' custom-button-list-wrapper'}>
                <ul className='custom-button-list' >
                    {this.getItems(options, selectedID)}
                </ul>
            </div>
        )
    }

    getItems(options: string[], selectedID: number) {
        return options.map((option, id) => {
            const isSelected = id === selectedID
            const callback = this.click.bind(this);
            return <CustomButtonListItem {...{id, option, isSelected, callback}} key={id}/>
        })
    }

    click(id: number) {
        this.setState({selectedID: id});
        this.props.callback(id);
    }
}
