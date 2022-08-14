import {ReactNode} from 'react';

export interface PluginRegistry {
    registerPostDropdownMenuComponent(component: ReactNode)
    registerRootComponent(component: ReactNode)
    registerReducer(reducer:Reducer)

    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
}