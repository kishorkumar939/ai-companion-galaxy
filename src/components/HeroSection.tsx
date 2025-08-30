import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-bg z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your AI Assistant for{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anything
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ask, plan, automate, and get tasks done instantly with your intelligent AI companion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Start Chat
            </Button>
            <Button className="btn-hero-secondary text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-16 h-16 bg-primary-glow/30 rounded-full blur-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;