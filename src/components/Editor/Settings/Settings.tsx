import * as React from "react";
import Dropdown from "../../customControls/Dropdown/Dropdown";
import QuantitySelector from "../../customControls/QuantitySelector/QuantitySelector";
import './style.css'
import CustomButtonList from "../../customControls/CustomButtonList/CustomButtonList";
import MaterialPicker from "../../customControls/MaterialPicker/MaterialPicker";
import TextInput from "../../customControls/TextInput/CustomButtonList";
import {store} from "../../../store";
import {setEngraving, setForm, setMaterial, setQuantity, setSize} from "../../../store/actions/editorActions";
import {MaterialEnum} from "../../../types/enums";
import {
    DEFAULT_ENGRAVING,
    DEFAULT_FORM,
    DEFAULT_MATERIAL,
    DEFAULT_QUANTITY,
    DEFAULT_SIZE
} from "../../../configs/config";

type SettingsProps = {
    className: string,
}

export default class Settings extends React.Component<SettingsProps> {
    constructor(props: SettingsProps) {
        super(props);
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <QuantitySelector
                    className='quantity-selector'
                    caption='Количество памятников'
                    selectedNumber={DEFAULT_QUANTITY}
                    numbers={2}
                    callback={(number: number) => {
                        store.dispatch(setQuantity(number));
                        console.log('Number = ' + number);
                    }}
                />

                <Dropdown id='form' caption='Форма'>
                    <CustomButtonList
                        className={'form-list'}
                        options={[
                            'Монумент',
                            'Шар',
                            'Сердечко',
                        ]}
                        selectedID={DEFAULT_FORM}
                        callback={(id) => {
                            store.dispatch(setForm(id));
                            console.log('FormID = ' + id);
                        }}
                    />
                </Dropdown>
                <Dropdown id='size' caption='Размер'>
                    <CustomButtonList
                        className={'form-list'}
                        options={[
                            'Маленький',
                            'Большой',
                            'Большущий',
                            'Гигантский',
                            'Легендарный',
                        ]}
                        selectedID={DEFAULT_SIZE}
                        callback={(id) => {
                            store.dispatch(setSize(id))
                            console.log('SizeID = ' + id);
                        }}
                    />
                </Dropdown>
                <Dropdown id='material' caption='Материал'>
                    <MaterialPicker
                        className='material-list'
                        selectedMaterial={DEFAULT_MATERIAL}
                        callback={(id: MaterialEnum) => {
                            store.dispatch(setMaterial(id))
                            console.log('MaterialID = ' + id);
                        }}
                    />
                </Dropdown>
                <Dropdown id='engraving' caption='Гравировка'>
                    <TextInput
                        className='engrave-input'
                        callback={(text) => {
                            store.dispatch(setEngraving(text))
                            console.log('Text = ' + text)
                        }}
                        defaultText={DEFAULT_ENGRAVING}
                    />
                </Dropdown>

            </div>
        )
    }
}
