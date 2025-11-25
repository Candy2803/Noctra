import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative py-80 overflow-hidden"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/candy28/3d-printing-geometric-shape.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Premium 3D Printed
            <span className="text-blue-200"> Creations</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Discover unique, high-quality 3D printed products crafted with precision and care.
            From custom figurines to functional accessories.
          </p>
          <a
            href="#products"
            className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-xl"
          >
            Browse Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
