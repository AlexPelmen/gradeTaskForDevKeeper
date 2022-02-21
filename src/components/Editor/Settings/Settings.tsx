import * as React from "react";
import Dropdown from "../../customControls/Dropdown/Dropdown";
import QuantitySelector from "../../customControls/QuantitySelector/QuantitySelector";
import './style.css'
import CustomButtonList from "../../customControls/CustomButtonList/CustomButtonList";
import MaterialPicker from "../../customControls/MaterialPicker/MaterialPicker";

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
                <QuantitySelector id='quantity' caption='Количество памятников' numbers={2} />

                <Dropdown id='form' caption='Форма'>
                    <CustomButtonList
                        className={'form-list'}
                        options={[
                            'Монумент',
                            'Шар',
                            'Сердечко',
                        ]}
                        selectedID={1}
                        callback={(id) => {
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
                        selectedID={1}
                        callback={(id) => {
                            console.log('SizeID = ' + id);
                        }}
                    />
                </Dropdown>
                <Dropdown id='material' caption='Материал'>
                    <MaterialPicker
                        className='material-list'
                        selectedMaterial='marble'
                        callback={(id) => {
                            console.log('MaterialID = ' + id);
                        }}
                    />
                </Dropdown>
                <Dropdown id='engraving' caption='Гравировка'>

                </Dropdown>

            </div>
        )
    }
}
