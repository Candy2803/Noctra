import { Package, Zap, Shield, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Package,
      title: 'Custom Designs',
      description: 'Unique 3D printed products tailored to perfection with attention to every detail.'
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'Quick turnaround times without compromising on quality or precision.'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'High-grade materials and cutting-edge printing technology for lasting durability.'
    },
    {
      icon: Sparkles,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and processes that care for our planet.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">PrintCraft</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We bring your imagination to life with precision 3D printing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
