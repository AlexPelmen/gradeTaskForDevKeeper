import {FormEnum, MaterialEnum, SizeEnum} from "./enums";

export interface EditorState {
    quantity: number;
    form: FormEnum;
    size: SizeEnum;
    material: MaterialEnum;
    engraving: string;
}

export enum EditorActionTypes {
    SET_QUANTITY = 'SET_QUANTITY',
    SET_FORM = 'SET_FORM',
    SET_SIZE = 'SET_SIZE',
    SET_MATERIAL = 'SET_MATERIAL',
    SET_ENGRAVING = 'SET_ENGRAVING',
}

interface SetQuantityAction {
    type: EditorActionTypes.SET_QUANTITY,
    payload: number,
}
interface SetFormAction {
    type: EditorActionTypes.SET_FORM,
    payload: number,
}
interface SetSizeAction {
    type: EditorActionTypes.SET_SIZE,
    payload: number,
}
interface SetMaterialAction {
    type: EditorActionTypes.SET_MATERIAL,
    payload: number,
}
interface SetEngravingAction {
    type: EditorActionTypes.SET_ENGRAVING,
    payload: number,
}

export type EditorAction = SetQuantityAction | SetFormAction | SetSizeAction | SetMaterialAction | SetEngravingAction;
