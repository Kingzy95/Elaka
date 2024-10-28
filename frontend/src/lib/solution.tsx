interface HTMLElementWithParent extends HTMLElement {
    parentElement: HTMLElement;
}

const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(".tab");
const indicator: HTMLElement | null = document.querySelector(".tab-indicator");
const panels: NodeListOf<HTMLElement> = document.querySelectorAll(".panel");
const previews: NodeListOf<HTMLElement> = document.querySelectorAll(".panel-preview");

if (indicator !== null && tabs.length > 0) {
    const firstTab = tabs[0] as HTMLElementWithParent;
    indicator.style.width = `${firstTab.getBoundingClientRect().width}px`;
    indicator.style.left = `${firstTab.getBoundingClientRect().left - firstTab.parentElement.getBoundingClientRect().left}px`;
}

tabs.forEach((tab: HTMLElement) => {
    tab.addEventListener("click", () => {
        const tabTarget: string | null = tab.getAttribute("aria-controls");

        if (indicator !== null && tabTarget !== null) {
            const tabWithParent = tab as HTMLElementWithParent;
            indicator.style.width = `${tabWithParent.getBoundingClientRect().width}px`;
            indicator.style.left = `${tabWithParent.getBoundingClientRect().left - tabWithParent.parentElement.getBoundingClientRect().left}px`;

            panels.forEach((panel: HTMLElement) => {
                const panelId: string | null = panel.getAttribute("id");
                if (tabTarget === panelId) {
                    panel.classList.remove("invisible", "opacity-0", "scale-90");
                    panel.classList.add("visible", "opacity-100", "scale-100");
                } else {
                    panel.classList.add("invisible", "opacity-0", "scale-90");
                    panel.classList.remove("visible", "opacity-100", "scale-100");
                }

                previews.forEach((preview: HTMLElement) => {
                    const prevTarget: string | null = preview.getAttribute("data-target");

                    if (tabTarget === prevTarget) {
                        preview.classList.replace("translate-y-[100%]", "translate-y-0");
                        preview.classList.replace("scale-75", "scale-100");
                        preview.classList.replace("opacity-50", "opacity-100");
                        preview.classList.replace("z-0", "z-10");
                    } else {
                        preview.classList.replace("scale-100", "scale-75");
                        preview.classList.replace("opacity-100", "opacity-50");
                        preview.classList.replace("z-10", "z-0");

                        setTimeout(() => {
                            preview.classList.replace("translate-y-0", "translate-y-[100%]");
                        }, 300);
                    }
                });
            });
        }
    });
});