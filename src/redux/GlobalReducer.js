import * as Actions from '../Constants';
import initialState from './Initial';

const setToggle = (root, item, key) => {
    let data = [...root.data]
    let i = data.findIndex(d => d.name.toLowerCase() == item.name.toLowerCase())
    data[i][key] = !data[i][key]
    return {
        ...root,
        data
    };
}

export const globalDataReducer = function (root = initialState, action) {
    switch (action.type) {
        case Actions.ADD_FRIEND:
            return {
                ...root,
                data: [...root.data, 
                    {
                        name:action.payload
                    }
                ],
                showAlert: true
            };
        case Actions.SEARCH_FRIEND:
            return {
                ...root,
                searchText: action.payload
            };
        case Actions.SORT_ON_NAME:
            return {
                ...root,
                nameSort: !root.nameSort
            };
        case Actions.SORT_FAV:
            return {
                ...root,
                favSort: !root.favSort
            };
        case Actions.TOGGLE_FAVOURITE:
            return setToggle(root, action.payload,'isFav')
            case Actions.TOGGLE_DELETE:
            return setToggle(root, action.payload,'isDelete')
        case Actions.CHANGE_PAGE:
            return {
                ...root,
                page:action.payload
            };
        case Actions.SHOW_ALERT:
            return {
                ...root,
                showAlert:action.payload
            };
        default:
            return root
    }
}