import Image from 'next/image';
import Link from 'next/link';

// @ts-ignore
const Feature = ({ imageSrc, title, description }) => (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
        <div className="space-y-12 text-center">
            <Image src={imageSrc} className="mx-auto h-14 w-auto" width={512} height={512} alt={`${title} illustration`} />
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
                <Link href="#" aria-label="read more" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
);

export default function TechnologyApproach() {
    return (
        <section className="relative py-32">
            <div aria-hidden="true" className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">La santé
                        intelligente à portée de message</h2>
                    <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Notre approche
                        centrée sur l&quot;IA et WhatsApp révolutionne l&quot;accès aux soins de santé. Découvrez comment nous
                        combinons technologie de pointe et simplicité d&quot;utilisation pour améliorer votre expérience de
                        santé au quotidien.</p>
                </div>
                <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
                    <Feature
                        imageSrc="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                        title="IA médicale avancée"
                        description="Notre IA est formée sur des données médicales à jour, offrant des réponses précises et personnalisées à vos questions de santé, 24/7."
                    />
                    <Feature
                        imageSrc="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                        title="Intégration WhatsApp"
                        description="Utilisez l'application de messagerie que vous connaissez déjà. Pas besoin de télécharger une nouvelle app ou d'apprendre une nouvelle interface."
                    />
                    <Feature
                        imageSrc="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                        title="Sécurité des données"
                        description="Vos informations de santé sont cryptées et sécurisées. Nous respectons les normes les plus strictes en matière de confidentialité des données médicales."
                    />
                </div>
            </div>
        </section>
    );
}