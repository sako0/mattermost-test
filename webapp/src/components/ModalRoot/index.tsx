import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';

import {keyName, PluginState} from 'reducer';
import {closeRootModal} from 'actions';

export const ModalRoot = () => {
    const isModalVisible = useSelector((state: PluginState) => state[keyName].rootModalReducer?.isModalVisible);
    const dispatch = useDispatch();
    if (isModalVisible) {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{'Modal title'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView='timeGridWeek'
                        locales={[jaLocale]}
                        allDaySlot={false}
                        locale='ja'
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek',
                        }}
                        firstDay={1}
                        events={[
                            {title: 'zoom', start: '2022-08-14T12:30:00', end: '2022-08-14T13:30:00'},
                            {title: 'room', start: '2022-08-15T15:30:00', end: '2022-08-15T19:00:00'},
                            {title: 'aaa', start: '2022-08-13T11:00:00', end: '2022-08-13T15:00:00'},
                        ]}
                    />
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
