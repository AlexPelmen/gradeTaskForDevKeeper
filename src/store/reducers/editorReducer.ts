import {EditorAction, EditorActionTypes, EditorState} from "../../types/types";
import {DEFAULT_ENGRAVING, DEFAULT_FORM, DEFAULT_MATERIAL, DEFAULT_QUANTITY, DEFAULT_SIZE} from "../../configs/config";

const initialState: EditorState = {
    quantity: DEFAULT_QUANTITY,
    form: DEFAULT_FORM,
    size: DEFAULT_SIZE,
    material: DEFAULT_MATERIAL,
    engraving: DEFAULT_ENGRAVING,
}

export const editorReducer = (state: EditorState = initialState, action: EditorAction) => {
    switch (action.type) {
        case EditorActionTypes.SET_QUANTITY:
            return {...state, quantity: action.payload}
        case EditorActionTypes.SET_FORM:
            return {...state, form: action.payload}
        case EditorActionTypes.SET_SIZE:
            return {...state, size: action.payload}
        case EditorActionTypes.SET_MATERIAL:
            return {...state, material: action.payload}
        case EditorActionTypes.SET_ENGRAVING:
            return {...state, engraving: action.payload}
        default:
            return state;
    }
}
