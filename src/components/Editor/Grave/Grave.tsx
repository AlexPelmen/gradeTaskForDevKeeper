import * as React from "react";
import GraveGraphicService from "../../../services/GraveGrapicsService/GraveGraphicService";
import './style.css'

type GraveProps = {
    className: string,
    graveGraphicService: GraveGraphicService,
}

export default class Grave extends React.Component<GraveProps> {
    readonly canvasID = 'graveCanvas';

    constructor(props: GraveProps) {
        super(props);
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <canvas height='798' width='872' id={this.canvasID}>Обновите браузер</canvas>
            </div>
        )
    }

    componentDidMount() {
        this.props.graveGraphicService.init(this.canvasID);
    }
}
