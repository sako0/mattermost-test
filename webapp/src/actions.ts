import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from './action_types';

export const openRootModal = () => {
    return {
        type: OPEN_ROOT_MODAL,
    };
};

export const closeRootModal = () => {
    return {
        type: CLOSE_ROOT_MODAL,
    };
};
