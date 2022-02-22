import CanvasService from "../CanvasService/CanvasService";
import {DEFAULT_ENGRAVING, DEFAULT_FORM, DEFAULT_MATERIAL, DEFAULT_SIZE} from "../../configs/config";
import {FormEnum, MaterialEnum, SizeEnum} from "../../types/enums";

export default class GraveGraphicService {
    canvasService: CanvasService;

    form: FormEnum;
    size: SizeEnum;
    material: MaterialEnum;
    engraving: string;

    constructor(canvasID: string) {
        this.canvasService = new CanvasService(canvasID);
        this.form = DEFAULT_FORM;
        this.size = DEFAULT_SIZE;
        this.material = DEFAULT_MATERIAL;
        this.engraving = DEFAULT_ENGRAVING;
    }

    init() {
        this.canvasService.init();
    }

    setForm(form: FormEnum) {
        this.form = form;
        this.redraw();
    }

    setSize(size: SizeEnum) {
        this.size = size;
        this.redraw();
    }

    setMaterial(material: MaterialEnum) {
        this.material = material;
        this.redraw();
    }

    setEngraving(text: string) {
        this.engraving = text;
        this.redraw();
    }

    redraw() {
        this.canvasService.redraw(this.form,this.size,this.engraving,undefined, '#000');
    }
}
