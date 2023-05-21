import type { Metadata } from 'next';
import BagelButton from './BagelButton';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="text-5xl font-bold font-display">Bagelaplooza</div>
        <div className="mt-4 text-2xl font-display">Bagels. As a service.</div>
        <div>
          <BagelButton />
        </div>
        <section id="product">
          <div className="text-3xl font-bold font-display">Product</div>
        </section>
        <section id="services">
          <div className="text-3xl font-bold font-display">Services</div>
        </section>
      </div>
    </main>
  )
}
