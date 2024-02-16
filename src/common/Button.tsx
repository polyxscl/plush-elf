import React, { useState } from 'react';
import './Button.css';

export function Button({
    children,
    onClick,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button className="button" 
            onClick={(e) => {
                e.preventDefault();
                onClick && onClick();
            }}
        >
            {children}
        </button>
    )
}

export function ConfirmButton({
    children,
    onClick,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button className="button confirm" 
            onClick={(e) => {
                e.preventDefault();
                onClick && onClick();
            }}
        >
            {children}
        </button>
    )
}

export function DenyButton({
    children,
    onClick,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button className="button deny" 
            onClick={(e) => {
                e.preventDefault();
                onClick && onClick();
            }}
        >
            {children}
        </button>
    )
}

export function ToggleButton({
    on,
    off,
    onToggle,
}: {
    on?: React.ReactNode;
    off?: React.ReactNode;
    onToggle?: (state: boolean) => void;
}) {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    };

    return (
        <button className={`button toggle off ${state ? "on" : "off"}`}
            onClick={(e) => {
                e.preventDefault();
                toggle();
                onToggle && onToggle(state);
            }}
        >
            {state === true && on}
            {state === false && off}
        </button>
    )
}