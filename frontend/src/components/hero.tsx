import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="pt-32 sm:pt-40 md:pt-48">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="relative">
                    <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
                        Santé,
                        <span className="relative">
                            <svg className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                                 xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 260 15.6">
                                <style>{`
                                      .st0 {
                                        @apply fill-secondaryLight;
                                      }
                                      `}
                                </style>
                                <path className="st0"
                                      d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"/>
                                <path
                                    className="st0"
                                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                                />
                                <path className="st0"
                                      d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"/>
                            </svg>
                            <span
                                className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Simplicité</span>
                        </span>
                    </h1>

                    <div className="relative items-center gap-12 lg:flex">
                        <div
                            className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                            <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">Accédez à des services de santé essentiels directement depuis WhatsApp. Prenez des rendez-vous, obtenez des réponses à vos questions de santé, vérifiez la disponibilité des médicaments et localisez les pharmacies de garde, le tout en quelques clics.</p>
                            <form action="" className="mt-12">
                                <div
                                    className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
                                    <div className="py-3 pl-4 lg:pl-5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                    </div>
                                    <input aria-label="your email" autoComplete="email" placeholder="Your mail address"
                                           className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white"
                                           type="email"/>
                                    <div className="md:pr-1.5 lg:pr-0">
                                        <button type="submit" title="Start buying"
                                                className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                            <span
                                                className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor"
                                                 className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                                <path
                                                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-12 hidden lg:block">
                                <span className="text-gray-700 dark:text-white">Développé par une <a
                                    href="customers.html"
                                    className="text-primary underline dark:text-primaryLight">équipe d&apos;experts</a> en santé et IA !</span>
                                <div
                                    className="mt-5 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-4 children:ring-gray-100 dark:children:ring-gray-900">
                                    <Image
                                        src="/images/avatars/avatar.webp"
                                        alt="user avatar"
                                        width={400}
                                        height={400}
                                    />
                                    <Image
                                        src="/images/avatars/avatar-1.webp"
                                        alt="user avatar"
                                        width={200}
                                         height={200}
                                    />
                                    <Image
                                        src="/images/avatars/avatar-2.webp"
                                        alt="user avatar"
                                        width="200"
                                         height={200}
                                    />
                                    <Image
                                        src="/images/avatars/avatar-3.webp"
                                        alt="user avatar"
                                        width={200}
                                         height={200}
                                    />
                                    <Image
                                        src="/images/avatars/avatar-4.webp"
                                        alt="user avatar"
                                        width={200}
                                         height={200}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                            <Image
                                className="w-full"
                                src="/images/team.svg"
                                alt="team illustration"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>

                    <div className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20">
                        <Link
                            href="customers.html"
                            className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white"
                        >
                            APPROUVÉ PAR LES PROFESSIONNELS DE SANTÉ ET LES UTILISATEURS
                        </Link>
                        <div
                            className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                            <Image
                                className="h-8 w-auto lg:h-10 lg:w-auto"
                                src="/images/clients/airbnb.svg"
                                loading="lazy"
                                alt="airbnb"
                                width={100}
                                height={40}
                            />
                            <Image
                                className="h-8 w-auto lg:h-10 lg:w-auto"
                                src="/images/clients/coty.svg"
                                loading="lazy"
                                alt="bissell"
                                width={100}
                                height={40}
                            />
                            <Image
                                className="h-8 w-auto lg:h-10 lg:w-auto"
                                src="/images/clients/ge.svg"
                                loading="lazy"
                                alt="ge"
                                width={100}
                                height={40}
                            />
                            <Image
                                className="h-8 w-auto lg:h-10 lg:w-auto"
                                src="/images/clients/lilly.png"
                                loading="lazy"
                                 alt="lilly"
                                width={100}
                                height={40}
                            />
                            <Image
                                className="h-8 w-auto lg:h-10 lg:w-auto"
                                src="/images/clients/microsoft.svg"
                                 loading="lazy"
                                alt="microsoft"
                                width={100}
                                height={40}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}