import { ScrumBoardItem } from "./sb.model";
import { ADD_ITEM_TO_BACKLOG, UPDATE_ITEM, REMOVE_ITEM } from "./redux-actions";

export interface IAppState{
    sbItemCollection: ScrumBoardItem[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    sbItemCollection: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState{
    switch (action.type) {
        case ADD_ITEM_TO_BACKLOG:
            action.backlog.id = state.sbItemCollection.length + 1;    
            action.backlog.category = 'backlog';
            return Object.assign({}, state, {
                sbItemCollection: state.sbItemCollection.concat(Object.assign({}, action.backlog)),
                lastUpdate: new Date()
            })
        case UPDATE_ITEM:
            var editedBacklogItem = state.sbItemCollection.find(t => t.id === action.id);
            var index = state.sbItemCollection.indexOf(editedBacklogItem);
            return Object.assign({}, state, {
                sbItemCollection: [
                    ...state.sbItemCollection.slice(0, index),
                    Object.assign({}, editedBacklogItem, {title: editedBacklogItem.title, 
                        description: editedBacklogItem.description,
                        storyPoints: editedBacklogItem.storyPoints,
                        category: editedBacklogItem.category,
                        issueTypeName: editedBacklogItem.issueTypeName,
                        issueTypeCode: editedBacklogItem.issueTypeCode }),
                    ...state.sbItemCollection.slice(index+1)
                ],
                lastUpdate: new Date()
            })
        case REMOVE_ITEM:
            return Object.assign({}, state, {
                sbItemCollection: state.sbItemCollection.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
    }
    return state;
}