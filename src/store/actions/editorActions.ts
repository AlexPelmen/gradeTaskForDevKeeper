import {MaterialEnum} from "../../types/enums";
import {EditorActionTypes} from "../../types/types";

export function setQuantity(quantity: number) {
    return {
        type: EditorActionTypes.SET_QUANTITY,
        payload: quantity,
    }
}

export function setForm(form: number) {
    return {
        type: EditorActionTypes.SET_FORM,
        payload: form,
    }
}

export function setSize(quantity: number) {
    return {
        type: EditorActionTypes.SET_SIZE,
        payload: quantity,
    }
}

export function setMaterial(material: MaterialEnum) {
    return {
        type: EditorActionTypes.SET_MATERIAL,
        payload: material,
    }
}

export function setEngraving(text: string) {
    return {
        type: EditorActionTypes.SET_ENGRAVING,
        payload: text,
    }
}

