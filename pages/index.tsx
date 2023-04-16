import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <main className='z-0 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-darkGray text-white'>
            <Header />

            <section id='hero' className='snap-start'>
                <Hero />
            </section>

            <section id='about' className='snap-center'>
                <About />
            </section>
        </main>
    );
}
