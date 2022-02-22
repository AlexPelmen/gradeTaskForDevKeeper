import * as React from "react";
import Grave from "./Grave/Grave";
import Settings from "./Settings/Settings";
import './style.css'
import GraveGraphicService from "../../services/GraveGrapicsService/GraveGraphicService";

interface EditorProps {

}

export default class Editor extends React.Component<EditorProps> {
    graveGraphicService: GraveGraphicService;

    constructor(props: EditorProps) {
        super(props);
        this.graveGraphicService = new GraveGraphicService();
    }

    render() {
        return (
            <div className='editor-wrapper'>
                <Settings className='settings-wrapper' graveGraphicService={this.graveGraphicService} />
                <Grave className='grave-wrapper' graveGraphicService={this.graveGraphicService}/>
            </div>
        )
    }
}
