import * as React from "react";
import Dropdown from "../../customControls/Dropdown/Dropdown";

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
                <Dropdown id='quantity' caption='Колличество памятников'>

                </Dropdown>
                <Dropdown id='form' caption='Форма'>

                </Dropdown>
                <Dropdown id='size' caption='Размер'>

                </Dropdown>
                <Dropdown id='material' caption='Матириал'>

                </Dropdown>
                <Dropdown id='engraving' caption='Гравировка'>

                </Dropdown>

            </div>
        )
    }
}
