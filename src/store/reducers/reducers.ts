import {combineReducers} from "redux";
import {editorReducer} from "./editorReducer";
import {moduleSystemReducer} from "./moduleSystemReducer";

type EditorReducerType = ReturnType<typeof editorReducer>
type ModuleSystemReducerType = ReturnType<typeof moduleSystemReducer>

export const rootReducer = combineReducers<EditorReducerType | ModuleSystemReducerType>({
    editor: editorReducer,
    moduleSystem: moduleSystemReducer,
})


