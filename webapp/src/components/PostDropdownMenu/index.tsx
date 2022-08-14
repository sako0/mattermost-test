import React, {useEffect} from 'react';

import {Dispatch} from 'redux';

import {useDispatch, useSelector} from 'react-redux';

import {openRootModal} from 'actions';
import {OPEN_ROOT_MODAL} from 'action_types';
import {keyName, PluginState} from 'reducer';

type PostDropdownMenuProps = {
    postId?: string
    dispatch:Dispatch
}

const PostDropdownMenu = ({postId}: PostDropdownMenuProps) => {
    const isModalVisible = useSelector((state:PluginState) => state[keyName]?.rootModalReducer?.isModalVisible);
    const dispatch = useDispatch();

    return (
        <li
            className={'MenuItem'}
            role={'menuitem'}
        >
            <button
                className='style--none'
                onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('test');
                    // eslint-disable-next-line no-console
                    console.log(dispatch(openRootModal()));

                    dispatch({type: OPEN_ROOT_MODAL});
                }
                }
            >
                <span>{postId}</span>
            </button>
        </li>

    );
};

export default PostDropdownMenu;