"use strict";

import React from 'react';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useThemeSwitcher();

    return (
        <button onClick={toggleTheme} className="switcher">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeSwitcher;