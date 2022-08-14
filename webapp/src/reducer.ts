import {combineReducers} from 'redux';

import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from 'action_types';

import {id as pluginId} from './manifest';

export const keyName = 'plugins-' + pluginId;

export type PluginState = {
    [key: string ]: {rootModalReducer?: RootModalVisibleType}
}

type RootModalVisibleType = {
    isModalVisible: boolean
}

const rootModalReducer = (state:RootModalVisibleType = {
    isModalVisible: false,
}, action: { type: string; }) => {
    switch (action.type) {
    case OPEN_ROOT_MODAL:
        return {...state, isModalVisible: true};
    case CLOSE_ROOT_MODAL:
        return {...state, isModalVisible: false};
    default:
        return state;
    }
};

const reducer = combineReducers({
    rootModalReducer,
});

export default reducer;
