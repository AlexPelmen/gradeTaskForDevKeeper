import * as React from "react";
import Grave from "./Grave/Grave";
import Settings from "./Settings/Settings";
import './style.css'

export default class Editor extends React.Component {
    render() {
        return (
            <div className='editor-wrapper'>
                <Settings className='settings-wrapper'/>
                <Grave className='grave-wrapper' />
            </div>
        )
    }
}
