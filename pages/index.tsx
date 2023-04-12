import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <main className='z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-darkGray text-white'>
            <Header />

            <section id='hero' className='snap-center'>
                <Hero />
            </section>
        </main>
    );
}
