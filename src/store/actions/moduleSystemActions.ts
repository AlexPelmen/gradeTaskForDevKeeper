import {ChangeModuleSystemAction, ModuleSystemTypes} from "../reducers/moduleSystemReducer";

export function changeModuleSystem(checked: boolean): ChangeModuleSystemAction {
    return {
        type: ModuleSystemTypes.CHANGE_MODULE_SYSTEM,
        payload: checked,
    }
}
