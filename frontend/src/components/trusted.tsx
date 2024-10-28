import Image from 'next/image';
// @ts-ignore
const Testimonial = ({ logo, quote, avatar, name, role }) => (
    <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <Image className="h-12 w-auto" src={logo} alt={`${name}'s company logo`} width={200} height={48} />
        <p className="text-gray-600 dark:text-gray-300">
            <span className="font-serif">&quot;</span>
            {quote}
            <span className="font-serif">&quot;</span>
        </p>
        <div className="flex items-center gap-3 text-left">
            <Image className="h-12 w-12 rounded-full" src={avatar} alt={`${name}'s avatar`} width={200} height={200} />
            <div>
                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">{name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
            </div>
        </div>
    </div>
);

export default function TrustedLeaders() {
    return (
        <section className="mb-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Approuvé par les professionnels de santé</h2>
                    <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
                        Notre application IA santé sur WhatsApp est plébiscitée par les médecins, les pharmaciens et les patients. Découvrez comment elle transforme l&apos;accès aux soins et améliore la gestion de la santé au quotidien.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                        <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
                            <Image className="mr-auto h-12 w-auto" src="/images/clients/microsoft.svg" alt="microsoft" width={200} height={48} />
                            <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                                <span className="font-serif">&quot;</span>Cette application IA santé a révolutionné la façon dont nous interagissons avec nos patients. La prise de rendez-vous est devenue beaucoup plus fluide, et nos patients apprécient de pouvoir obtenir des réponses à leurs questions de santé à tout moment. C&apos;est un outil précieux qui nous aide à offrir des soins plus accessibles et personnalisés. <span className="font-serif">&quot;</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Image className="h-12 w-12 rounded-full" src="/images/avatars/avatar-2.webp" alt="Andy Doe avatar" width={200} height={200} />
                                <div>
                                    <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Dr. Sophie Martin</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Médecin généraliste</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Testimonial
                        logo="/images/clients/airbnb.svg"
                        quote="La fonctionnalité de vérification de disponibilité des médicaments est un vrai plus. Nos clients gagnent du temps et nous pouvons mieux gérer nos stocks. C'est un outil indispensable pour les pharmacies modernes."
                        avatar="/images/avatars/avatar-3.webp"
                        name="Pierre Dupont"
                        role="Pharmacien"
                    />

                    <Testimonial
                        logo="/images/clients/ge.svg"
                        quote="En tant que patient chronique, cette app a changé ma vie. Je peux facilement prendre mes rendez-vous et obtenir des informations fiables sur ma santé. C'est comme avoir un assistant médical personnel 24/7."
                        avatar="/images/avatars/avatar-4.webp"
                        name="Marie Durand"
                        role="Patiente"
                    />
                </div>
            </div>
        </section>
    );
}