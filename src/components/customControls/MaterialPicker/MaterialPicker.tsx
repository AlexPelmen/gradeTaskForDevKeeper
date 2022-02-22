import * as React from "react";
import {MaterialMap, materialMap} from "../../../configs/materialMap";
import MaterialPickerItem from "./MaterialPickerItem";
import {MaterialEnum} from "../../../types/enums";
import './style.css'
import {store} from "../../../store";


type MaterialPickerProps = {
    className: string,
    selectedMaterial: string,
    callback: (id: MaterialEnum) => void
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
        store.subscribe(() => {
            const newMaterial = store.getState().editor.material
            this.setState({selectedMaterial: newMaterial})
        })
        this.materialMap = materialMap;
    }

    render() {
        const {className, callback} = this.props;
        const selectedID = this.state.selectedMaterial;
        return (
            <div className={className + ' material-picker-wrapper'}>
                <div className='material-picker-frame'>
                    <ul className='material-picker-list'>
                        {this.getItems(materialMap, selectedID, callback)}
                    </ul>
                </div>
            </div>
        )
    }

    getItems(options: MaterialMap, selectedMaterial: string, callback: (id: MaterialEnum) => void) {
        const batchHtml = [];
        for(const material in materialMap) {
            const id = material as MaterialEnum;
            const isSelected = id === selectedMaterial
            const texture = materialMap[id].texture;
            const color = materialMap[id].color;
            batchHtml.push(<MaterialPickerItem {...{id, isSelected, callback, texture, color}} key={id} />);
        }

        return batchHtml;
    }
}
