import * as React from "react";
import {MaterialMap, materialMap} from "../../../configs/materialMap";
import MaterialPickerItem from "./MaterialPickerItem";
import './style.css'

type MaterialPickerProps = {
    className: string,
    selectedMaterial: string,
    callback: (id: string) => void
}

type MaterialPickerState = {
    selectedMaterial: string,
}

export default class MaterialPicker extends React.Component<MaterialPickerProps, MaterialPickerState> {
    materialMap: MaterialMap;

    constructor(props: MaterialPickerProps) {
        super(props);
        this.state = {
            selectedMaterial: this.props.selectedMaterial,
        }
        this.materialMap = materialMap;
    }

    render() {
        const {className} = this.props;
        const selectedID = this.state.selectedMaterial;
        return (
            <div className={className + ' material-picker-wrapper'}>
                <div className='material-picker-frame'>
                    <ul className='material-picker-list'>
                        {this.getItems(materialMap, selectedID)}
                    </ul>
                </div>
            </div>
        )
    }

    getItems(options: MaterialMap, selectedMaterial: string) {
        const batchHtml = [];
        for(const id in materialMap) {
            const isSelected = id === selectedMaterial
            const callback = this.click.bind(this);
            const texture = materialMap[id].texture;
            const color = materialMap[id].color;
            batchHtml.push(<MaterialPickerItem {...{id, isSelected, callback, texture, color}} key={id} />);
        }

        return batchHtml;
    }

    click(id: string) {
        this.setState({selectedMaterial: id});
        this.props.callback(id);
    }
}
