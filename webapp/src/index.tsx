import {Store, Action} from 'redux';
import {GlobalState} from 'mattermost-redux/types/store';
import React from 'react';

import {ModalRoot} from 'components/ModalRoot';

import reducer from 'reducer';

import PostDropdownMenu from './components/PostDropdownMenu';

import manifest from './manifest';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from './types/mattermost-webapp';

export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(
        registry: PluginRegistry,
        store: Store<GlobalState, Action<Record<string, unknown>>>,
    ) {
        registry.registerReducer(reducer);
        registry.registerPostDropdownMenuComponent(PostDropdownMenu);
        registry.registerRootComponent(ModalRoot);
    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void;
    }
}

window.registerPlugin(manifest.id, new Plugin());
