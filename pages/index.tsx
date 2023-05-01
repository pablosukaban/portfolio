import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Илья Приходько | Портфолио</title>
            </Head>
            <main className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-darkGray text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primaryOrange/80">
                <Header />

                <section id="hero" className="snap-start">
                    <Hero />
                </section>

                <section id="about" className="snap-center">
                    <About />
                </section>

                <section id="skills" className="snap-start">
                    <Skills />
                </section>

                <section id="projects" className="snap-start">
                    <Projects />
                </section>

                <section id="contact" className="snap-start">
                    <Contact />
                </section>

                <footer className="sticky bottom-2 w-full cursor-pointer md:bottom-5">
                    <div className="flex cursor-default items-center justify-center">
                        <Link href="#hero">
                            <ArrowUpCircleIcon className="h-10 w-10 rounded-full text-gray-500 transition hover:scale-105 hover:text-primaryOrange/80" />
                        </Link>
                    </div>
                </footer>
            </main>
        </>
    );
}
