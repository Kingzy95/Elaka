const faqs: NodeListOf<HTMLElement> = document.querySelectorAll(".faq");

for (let i = 0; i < faqs.length; i++) {
    const answer: HTMLElement | null = faqs[i].querySelector(".faq-answer");
    const icon: HTMLElement | null = faqs[i].querySelector(".arrow-down");

    if (answer && icon) {
        faqs[i].addEventListener("click", () => {
            for (let j = 0; j < faqs.length; j++) {
                const answer2: HTMLElement | null = faqs[j].querySelector(".faq-answer");
                const icon2: HTMLElement | null = faqs[j].querySelector(".arrow-down");

                if (faqs[i] !== faqs[j] && answer2 && icon2) {
                    answer2.style.maxHeight = "0px";
                    icon2.classList.replace("rotate-180", "rotate-0");
                }
            }

            if (icon.classList.contains("rotate-180")) {
                answer.style.maxHeight = "0px";
                icon.classList.replace("rotate-180", "rotate-0");
            } else {
                answer.style.maxHeight = `${answer.scrollHeight}px`;
                icon.classList.replace("rotate-0", "rotate-180");
            }
        });
    }
}