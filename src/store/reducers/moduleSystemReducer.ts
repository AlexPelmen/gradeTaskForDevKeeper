import {Reducer} from "redux";

export interface ModuleSystemState {
    isModuleSystem: boolean,
}

const initialState = {
    isModuleSystem: false,
}

export enum ModuleSystemTypes {
    CHANGE_MODULE_SYSTEM = 'CHANGE_MODULE_SYSTEM',
}

export interface ChangeModuleSystemAction {
    type: ModuleSystemTypes.CHANGE_MODULE_SYSTEM,
    payload?: boolean,
}

type ModuleSystemAction = ChangeModuleSystemAction /* | Action | Action */;

export const moduleSystemReducer: Reducer = (state: ModuleSystemState = initialState, action: ModuleSystemAction) => {
    switch (action.type) {
        case ModuleSystemTypes.CHANGE_MODULE_SYSTEM:
            return {...state, isModuleSystem: action.payload}
        default:
            return state;
    }
}
