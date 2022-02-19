import * as React from "react";
import GraveGraphicService from "../../../services/GraveGrapicsService/GraveGraphicService";

type GraveProps = {
    className: string,
}

export default class Grave extends React.Component<GraveProps> {
    readonly canvasID = 'graveCanvas';
    graveGraphicService: GraveGraphicService;

    constructor(props: GraveProps) {
        super(props);
        this.graveGraphicService = new GraveGraphicService(this.canvasID);
    }

    render() {
        const {className} = this.props;
        return (
            <div className={className}>
                <canvas height='872' width='798' id={this.canvasID}>Обновите браузер</canvas>
            </div>
        )
    }

    componentDidMount() {
        this.graveGraphicService.init();
    }
}
