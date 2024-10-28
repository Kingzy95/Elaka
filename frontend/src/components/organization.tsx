"use client";

import React, {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import TabButton from "@/components/tabButton";


const FeatureItem: React.FC<{
    iconSrc: string;
    title: string;
    description: string }> = ({
         iconSrc,
         title,
         description,
     }) => (
    <div className="flex items-center gap-6">
        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
            <Image className="m-auto h-8 w-auto" src={iconSrc} alt="icon illustration" width={512} height={512} />
        </div>
        <div className="w-[calc(100%-7.5rem)]">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    </div>
);

const Organization: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeTabElement = tabsRef.current[activeTab];
        if (activeTabElement) {
            const tabsContainer = activeTabElement.parentElement;
            if (tabsContainer) {
                setIndicatorStyle({
                    left: `${activeTabElement.offsetLeft - tabsContainer.offsetLeft}px`,
                    width: `${activeTabElement.offsetWidth}px`,
                });
            }
        }
    }, [activeTab]);

    const tabs = [
        { title: "Rendez-vous", controls: "panel-0" },
        { title: "Questions Santé", controls: "panel-1" },
        { title: "Pharmacies", controls: "panel-2" },
    ];

    const panels = [
        {
            id: "panel-0",
            title: "Prenez rendez-vous facilement via WhatsApp",
            description: "Plus besoin d'attendre au téléphone ou de vous déplacer. Prenez rendez-vous avec votre médecin en quelques messages, quand vous voulez, où vous voulez.",
            features: [
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/4727/4727266.png",
                    title: "Disponibilité en temps réel",
                    description: "Consultez les créneaux disponibles et choisissez celui qui vous convient le mieux."
                },
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/584/584796.png",
                    title: "Rappels automatiques",
                    description: "Recevez des rappels pour vos rendez-vous et modifiez-les facilement si nécessaire."
                },
            ],
            image: "/images/screenshots/rdv-elaka.png",
        },
        {
            id: "panel-1",
            title: "Obtenez des réponses à vos questions de santé",
            description: "Notre assistant IA est là pour répondre à vos questions de santé 24/7. Obtenez des informations fiables et des conseils personnalisés en un instant.",
            features: [
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/6106/6106288.png",
                    title: "IA médicale avancée",
                    description: "Une intelligence artificielle formée sur les données médicales les plus récentes."
                },
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/2313/2313906.png",
                    title: "Confidentialité assurée",
                    description: "Vos conversations sont cryptées et vos données personnelles protégées."
                },
            ],
            image: "/images/screenshots/tailus-home-dark.webp"
        },
        {
            id: "panel-2",
            title: "Trouvez les médicaments et les pharmacies dont vous avez besoin",
            description: "Localisez rapidement les pharmacies de garde et vérifiez la disponibilité des médicaments près de chez vous.",
            features: [
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/3340/3340200.png",
                    title: "Vérification des stocks",
                    description: "Consultez la disponibilité des médicaments dans les pharmacies à proximité."
                },
                {
                    iconSrc: "https://cdn-icons-png.flaticon.com/512/5405/5405929.png",
                    title: "Pharmacies de garde",
                    description: "Trouvez facilement les pharmacies ouvertes, même en dehors des heures habituelles."
                },
            ],
            image: "/images/screenshots/tailus-contact.webp"
        },
    ];


    return (
        <section className="">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Votre santé simplifiée avec WhatsApp</h2>
                    <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Notre application IA santé intègre tout ce dont vous avez besoin pour gérer votre santé au quotidien, le tout accessible via WhatsApp. Simple, rapide et efficace.</p>

                    <div role="tablist" aria-label="tabs" className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
                        <div className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800" style={indicatorStyle} ></div>
                        {tabs.map((tab, index) => (
                            <TabButton
                                key={index}
                                title={tab.title}
                                isSelected={activeTab === index}
                                onClick={() => setActiveTab(index)}
                                controls={tab.controls}
                                ref={(el: HTMLButtonElement | null) => {
                                    tabsRef.current[index] = el;
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <div className="gap-6 space-y-12 md:flex md:space-y-0">
                        <div className="relative md:w-1/2">
                            {panels.map((panel, index) => (
                                <div
                                    key={index}
                                    id={panel.id}
                                    className={`panel ${activeTab === index ? 'visible inset-0 flex scale-100 flex-col justify-center opacity-100' : 'invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0'} transition duration-500 md:absolute`}
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">{panel.title}</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">{panel.description}</p>
                                        <div className="mt-12 space-y-6">
                                            {panel.features.map((feature, featureIndex) => (
                                                <FeatureItem key={featureIndex} {...feature} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                            <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                                <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                                    {panels.map((panel, index) => (
                                        <div
                                            key={index}
                                            data-target={panel.id}
                                            className={`panel-preview absolute inset-0 z-10 flex items-end overflow-hidden px-6 transition duration-500 sm:px-10 ${
                                                activeTab === index
                                                    ? 'translate-y-0 scale-100 opacity-100'
                                                    : 'translate-y-[100%] scale-100 opacity-50 z-0'
                                            }`}
                                        >
                                            <Image
                                                src={panel.image}
                                                className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                alt={`tailus screenshot ${panel.title}`}
                                                width={850}
                                                height={1780}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organization;