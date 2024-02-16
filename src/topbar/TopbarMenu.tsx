import React from 'react';
import './TopbarMenu.css';
import { Menu, Submenu } from '@tauri-apps/api/menu';

export function TopbarMenuButton({
    children,
    onContextMenu
}: {
    children: React.ReactNode,
    onContextMenu?: React.MouseEventHandler,
}) {
    return (
        <button className="topbar-menu-button" onContextMenu={onContextMenu}>
            {children}
        </button>
    )
}

export function TopbarMenuSearch() {
    
}

export function TopbarMenu() {
    async function doPopup() {
        let menu = await Menu.new();
        let submenu = await Submenu.new(
            {
                id: "submenu",
                text: "Submenu"
            }
        );
        await menu.append(submenu);
        await menu.popup();
    }

    return (
        <div id="topbar-menu">
            <TopbarMenuButton onContextMenu={async () => await doPopup()}>Shelf</TopbarMenuButton>
            <TopbarMenuButton>Edit</TopbarMenuButton>
            <TopbarMenuButton>View</TopbarMenuButton>
            <TopbarMenuButton>Options</TopbarMenuButton>
        </div>
    )
}