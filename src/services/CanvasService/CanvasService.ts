import {BACKGROUND_GRAVEYARD} from "../../configs/config";
import {FormEnum} from "../../types/enums";

export default class CanvasService {
    canvasID: string;
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
    backgroundImage?: HTMLImageElement;
    backgroundImageIsLoaded: boolean;

    constructor(canvasID: string) {
        this.canvasID = canvasID;
        this.backgroundImageIsLoaded = false;
        this.loadImage(BACKGROUND_GRAVEYARD);
    }

    init() {
        const canvas = document.getElementById(this.canvasID);
        if (canvas) {
            this.canvas = canvas as HTMLCanvasElement;
        } else {
            throw 'no canvas';
        }

        const context = this.canvas.getContext('2d');
        if (context) {
            this.context = context;
        } else {
            throw 'no context';
        }

        this.drawBackground();
    }

    /**
     * Тут мы перересовываем камень на канве
     * Обработка входных данных в GraveGraphicService
     * @param form
     * @param scale
     * @param text
     * @param texture
     * @param color
     */
    redraw(
        form: FormEnum,
        scale: number,
        text: string,
        texture?: string,
        color?: string
    ) {


    }


    drawBackground() {
        if (this.context && this.backgroundImage && this.backgroundImageIsLoaded) {
            const width = this.canvas?.width ?? 872;
            const height = this.canvas?.height ?? 798;
            const imageWidth = this.backgroundImage.width;
            const imageHeight = this.backgroundImage.height;

            this.context.drawImage(
                this.backgroundImage,
                0, 0, imageWidth, imageHeight,
                0, 0, width, height
            );
        }
    }

    loadImage(src: string) {
        this.backgroundImage = new Image();
        this.backgroundImage.src = src;
        this.backgroundImage.onload = () => {
            this.backgroundImageIsLoaded = true;
            this.drawBackground();
        }
    }
}
