import Image from 'next/image';
import Link from 'next/link';

export default function DevelopmentSection() {
    return (
        <section className="mt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
                    <div className="md:5/12 lg:w-6/12">
                        <Image
                            className="md:-ml-8"
                            src="/images/stats-login.webp"
                            alt="tailus stats and login components"
                            width={1779}
                            height={1592}
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                            L&apos;innovation au service de votre santé quotidienne
                        </h2>
                        <p className="mt-8 text-gray-600 dark:text-gray-300">
                            Notre application IA santé est le fruit d&apos;une collaboration entre experts en santé et
                            développeurs passionnés. Nous avons créé une solution qui rend la gestion de votre santé
                            aussi simple que l&apos;envoi d&apos;un message WhatsApp.
                        </p>
                        <p className="mb-12 mt-4 text-gray-600 dark:text-gray-300">
                            Grâce à l&apos;intelligence artificielle avancée et à une interface utilisateur intuitive, nous
                            mettons à votre disposition un assistant santé personnel disponible 24/7. Que ce soit pour
                            prendre un rendez-vous, obtenir des informations sur un médicament ou trouver une pharmacie
                            de garde, tout est à portée de main.
                        </p>
                        <Link href="/"
                              className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                            <span className="relative text-base font-semibold text-white dark:text-gray-900">
                                Commencer maintenant
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}