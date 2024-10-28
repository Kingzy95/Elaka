"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";
import {ContainerScroll} from "@/components/ui/container-scroll-animation";

export function AuroraBg() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{opacity: 0.0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="max-w-4xl mx-auto p-4">
                    <h1 className="relative z-10 text-3xl pt-40 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
                        S&apos;implifiez votre quotidien avec notre IA santé
                    </h1>
                    <p></p>
                    <p className="text-dark max-w-3xl mx-auto my-2 text-sm text-center relative z-10 dark:text-neutral-400">
                        Accédez à des services de santé essentiels directement depuis WhatsApp. Prenez des rendez-vous, obtenez des réponses à vos questions de santé, vérifiez la disponibilité des médicaments et localisez les pharmacies de garde, le tout en quelques clics.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <button
                        className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                        Documentation
                    </button>
                    <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                        Essayer gratuitement
                    </button>
                </div>
            </motion.div>
            <ContainerScroll
                titleComponent={
                    <></>
                }
            >
                <Image
                    src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </AuroraBackground>
    );
}
