import './Topbar.css';
import WindowControl from './WindowControl';

import Logo from '@src/assets/logo.svg?react';
import { TopbarMenu } from './TopbarMenu';

export default function Topbar () {
    return (
        <div id="topbar">
            <Logo id="topbar-logo" />
            <div data-tauri-drag-region id="topbar-draggable-region" />
            <TopbarMenu />
            <WindowControl />
        </div>
    )
}