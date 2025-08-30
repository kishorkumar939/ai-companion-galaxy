import { MessageSquare, Zap, FileText, Calendar, Clock, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Smart Conversations',
      description: 'Engage in natural, context-aware conversations that understand your needs and preferences.'
    },
    {
      icon: Zap,
      title: 'Task Automation',
      description: 'Automate repetitive tasks and workflows to save time and increase productivity.'
    },
    {
      icon: FileText,
      title: 'Research & Writing',
      description: 'Generate content, conduct research, and create documents with AI-powered assistance.'
    },
    {
      icon: Calendar,
      title: 'Scheduling & Reminders',
      description: 'Manage your calendar, set reminders, and organize your daily tasks effortlessly.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access your AI assistant anytime, anywhere, with instant responses and support.'
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Adapts and improves over time to provide increasingly personalized assistance.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our AI Assistant the perfect companion for all your tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-gradient card-hover rounded-2xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;