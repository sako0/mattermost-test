import React, {useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {CLOSE_ROOT_MODAL} from 'action_types';

import {keyName, PluginState} from 'reducer';
import {closeRootModal} from 'actions';

export const ModalRoot = () => {
    const isModalVisible = useSelector((state: PluginState) => state[keyName]?.rootModalReducer?.isModalVisible);
    const dispatch = useDispatch();
    if (isModalVisible) {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{'Modal title'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{'test'}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            dispatch(closeRootModal());
                        }}
                    >
                        {'Close'}
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
    return <></>;
};

// const mapStateToProps = (state:any) => ({
//     isVisible: isRootModalVisible(state),
// });
// connect(mapStateToProps, null)(ModalRoot);