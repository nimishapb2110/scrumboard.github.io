import { ScrumBoardItem } from "./sb.model";
import { ADD_ITEM_TO_BACKLOG, UPDATE_ITEM, REMOVE_ITEM, GET_SB_ITEMS } from "./redux-actions";

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
        case GET_SB_ITEMS:
        let a = Object.assign({}, state, {
            sbItemCollection: action.sbItemCollectionFromServer,
            lastUpdate: new Date()
        })
        console.log(a);
            return a
        case ADD_ITEM_TO_BACKLOG:
        //    action.newSbItem.id = state.sbItemCollection.length + 1;    
           // action.newSbItem.category = 'backlog';
            return Object.assign({}, state, {
                sbItemCollection: state.sbItemCollection.concat(Object.assign({}, action.newSbItem)),
                lastUpdate: new Date()
            })
        case UPDATE_ITEM:
            var editedBacklogItem = state.sbItemCollection.find(t => t.id === action.modifiedSbItem.id);
            var index = state.sbItemCollection.indexOf(editedBacklogItem);
            return Object.assign({}, state, {
                sbItemCollection: [
                    ...state.sbItemCollection.slice(0, index),
                    Object.assign({}, editedBacklogItem, {id: action.modifiedSbItem.id,
                        title: action.modifiedSbItem.title, 
                        description: action.modifiedSbItem.description,
                        storyPoints: action.modifiedSbItem.storyPoints,
                        category: action.modifiedSbItem.category,
                        issueType: action.modifiedSbItem.issueType }),
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