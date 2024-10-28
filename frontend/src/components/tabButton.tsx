import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const TabButton = forwardRef<HTMLButtonElement, {
    title: string;
    isSelected: boolean;
    onClick: () => void;
    controls: string;
}>(({ title, isSelected, onClick, controls }, ref) => (
    <button
        role="tab"
        aria-selected={isSelected}
        aria-controls={controls}
        tabIndex={isSelected ? 0 : -1}
        onClick={onClick}
        className={cn(`tab relative block rounded-full py-2.5 px-4 transition-colors duration-300 ${
            isSelected ? 'text-primary dark:text-primaryLight bg-white shadow-md dark:bg-gray-800' : 'hover:text-primary dark:hover:text-primaryLight'
        }`)}
        ref={ref}
    >
        <span className="relative z-10 m-auto block w-max text-sm font-medium tracking-wider">{title}</span>
    </button>
));

TabButton.displayName = "TabButton";

export default TabButton;
