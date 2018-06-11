export const ADD_ITEM_TO_BACKLOG = 'ADD_ITEM_TO_BACKLOG';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const GET_SB_ITEMS = 'GET_SB_ITEMS'
​
export function getSbItems() {
  return {
    type: GET_SB_ITEMS
  }
}

export const ADD_SB_ITEM = 'ADD_SB_ITEM'
​
export function addSbItem(sbItemToCreate) {
  return {
    type: ADD_SB_ITEM,
    sbItemToCreate
  }
}

export const UPDATE_SB_ITEM = 'UPDATE_SB_ITEM'
​
export function updateSbItem(sbItemToUpdate) {
  return {
    type: UPDATE_SB_ITEM,
    sbItemToUpdate
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
​
function receivePosts(sbItems, json) {
  return {
    type: RECEIVE_POSTS,
    sbItems,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}