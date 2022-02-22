import {
    BACKGROUND_GRAVEYARD,
    DEFAULT_FORM, DEFAULT_SIZE,
    X_COORD_GRAVE_STONE,
    Y_COORD_GRAVE_STONE
} from "../../configs/config";
import {FormEnum, SizeEnum} from "../../types/enums";
import {canvasStoneFeedsPaths} from "../../configs/canvasStoneFeedsPaths";
import {scaleToSizeMap} from "../../configs/scaleToSizeMap";

const allGraveForms = [
    FormEnum.monument,
    FormEnum.sphere,
    FormEnum.heart,
]

export default class CanvasService {
    canvasID: string;
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
    backgroundImage?: HTMLImageElement;
    backgroundImageIsLoaded: boolean;

    canvasFeedImages: {[form: string]: HTMLImageElement};
    canvasFeedsImagesLoaded: boolean;
    canvasFeedsImagesLoadedNumber: number;

    constructor() {
        this.canvasID = '';
        this.backgroundImageIsLoaded = false;
        this.canvasFeedImages = {};
        this.canvasFeedsImagesLoaded = false;
        this.canvasFeedsImagesLoadedNumber = 0;

        this.loadBackgroundImage(BACKGROUND_GRAVEYARD);
        this.loadFeeds();
    }

    init(canvasID: string) {
        this.canvasID = canvasID;
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
    }

    drawBackground() {
        if (this.context && this.backgroundImage && this.backgroundImageIsLoaded) {
            const width = this.canvas?.width ?? 872;
            const height = this.canvas?.height ?? 798;
            const imageWidth = this.backgroundImage.width;
            const imageHeight = this.backgroundImage.height;

            console.log('drawBackground');
            this.context.drawImage(
                this.backgroundImage,
                0, 0, imageWidth, imageHeight,
                0, 0, width, height
            );
        }
    }

    loadBackgroundImage(src: string) {
        this.backgroundImage = new Image();
        this.backgroundImage.src = src;
        this.backgroundImage.onload = () => {
            this.backgroundImageIsLoaded = true;
            this.drawBackground();
        }
    }

    loadFeeds() {
        allGraveForms.forEach((form) => {
            console.log(form);
            const image = new Image();
            image.src = canvasStoneFeedsPaths[form];
            image.onload = () => {
                this.canvasFeedsImagesLoadedNumber++;
                if(this.canvasFeedsImagesLoadedNumber === allGraveForms.length) {
                    this.canvasFeedsImagesLoaded = true;
                    this.drawStone(DEFAULT_FORM, DEFAULT_SIZE);
                }
            }
            this.canvasFeedImages[form] = image;
        })
    }

    drawStone(form: FormEnum, size: SizeEnum) {
        console.log(form, size);
        if(this.context && this.canvasFeedsImagesLoaded) {
            const imageWidth = this.canvasFeedImages[form].width;
            const imageHeight = this.canvasFeedImages[form].height;
            const scale = scaleToSizeMap[size];
            const xUpperLeftCorner = X_COORD_GRAVE_STONE - imageWidth * scale / 2;
            const yUpperLeftCorner = Y_COORD_GRAVE_STONE - imageHeight * scale;
            console.log('drawStone');
            this.context.drawImage(
                this.canvasFeedImages[form],
                0,
                0,
                imageWidth,
                imageHeight,
                xUpperLeftCorner,
                yUpperLeftCorner,
                imageWidth * scale,
                imageHeight * scale,
            )
        }
    }

    draw(form: FormEnum, size: SizeEnum) {
        this.drawBackground();
        this.drawStone(form, size);
    }
}
