import { useCallback, useEffect, useState } from 'react';
import './WindowControl.css';
import { getCurrent } from '@tauri-apps/api/window';

import MinimizeIcon from '@src/assets/minimize.svg?react';
import MaximizeIcon from '@src/assets/maximize.svg?react';
import CloseIcon from '@src/assets/close.svg?react';
import RestoreIcon from '@src/assets/restore.svg?react'
import { UnlistenFn } from '@tauri-apps/api/event';

export default function WindowControl() {
    const [isMaximized, setIsMaximized] = useState(false);

    const updateMaximizedState = useCallback(async () => {
        setIsMaximized(await getCurrent().isMaximized());
    }, [getCurrent()]);

    useEffect(() => {
        let unlisten: UnlistenFn | undefined;

        const listen = async () => {
            unlisten = await getCurrent().onResized(() => {
                updateMaximizedState();
            });
        };
    
        listen();
    
        return () => unlisten && unlisten();
    }, [])

    return (
        <div id='window-controls'>
            <button id='window-control-minimize'
                onClick={async () => await getCurrent().minimize()}
            >
                <MinimizeIcon />
            </button>
            <button id='window-control-maximize'
                onClick={async () => {
                    await getCurrent().toggleMaximize();
                    setIsMaximized(!isMaximized);
                }}
            >
            {
                isMaximized
                ? <RestoreIcon />
                : <MaximizeIcon />
            }
            </button>
            <button id='window-control-close' 
                onClick={async () => await getCurrent().close()}
            >
                <CloseIcon />
            </button>
        </div>
    )
}