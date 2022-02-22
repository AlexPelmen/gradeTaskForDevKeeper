import CanvasService from "../CanvasService/CanvasService";
import {DEFAULT_ENGRAVING, DEFAULT_FORM, DEFAULT_MATERIAL, DEFAULT_SIZE} from "../../configs/config";
import {FormEnum, MaterialEnum, SizeEnum} from "../../types/enums";

export default class GraveGraphicService {
    canvasService: CanvasService;

    form: FormEnum;
    size: SizeEnum;
    material: MaterialEnum;
    engraving: string;

    constructor() {
        this.canvasService = new CanvasService();
        this.form = DEFAULT_FORM;
        this.size = DEFAULT_SIZE;
        this.material = DEFAULT_MATERIAL;
        this.engraving = DEFAULT_ENGRAVING;
    }

    init(canvasID: string) {
        this.canvasService.init(canvasID);
        this.draw();
    }

    setForm(form: FormEnum) {
        this.form = form;
        this.draw();
    }

    setSize(size: SizeEnum) {
        this.size = size;
        this.draw();
    }

    draw() {
        console.log(this.form, this.size);
        this.canvasService.draw(this.form, this.size);
    }
}
