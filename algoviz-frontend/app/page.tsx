import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-cyber/80 z-0" />
      <div className="relative z-10 text-center px-4 pt-20">
        <Image src="/logo.png" width={80} height={80} alt="Logo" className="mx-auto mb-6 animate-pulse" />
        <h1 className="text-white font-extrabold text-4xl md:text-6xl mb-4">Unlock Your Potential with Visionary Algorithms</h1>
        <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          The cyber learning hub for mastering DSA, machine learning, and web development.
        </p>
        <Link href="/courses" className="btn text-lg bg-accent hover:bg-electric shadow-lg animate-glow">Explore Courses</Link>
        {/* You can add a stylized SVG animation for the eye/brain here */}
      </div>
    </section>
  );
}
