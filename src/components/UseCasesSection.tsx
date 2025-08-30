import { GraduationCap, Briefcase, Building2 } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Get help with research, writing essays, solving problems, and managing your study schedule.',
      features: ['Homework assistance', 'Research support', 'Study planning', 'Writing feedback']
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      description: 'Boost productivity with email drafting, meeting summaries, project planning, and data analysis.',
      features: ['Email automation', 'Meeting notes', 'Project management', 'Data insights']
    },
    {
      icon: Building2,
      title: 'Businesses',
      description: 'Streamline operations with customer support, content creation, workflow automation, and analytics.',
      features: ['Customer service', 'Content creation', 'Process automation', 'Business analytics']
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perfect for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're learning, working, or running a business, our AI Assistant adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="card-gradient card-hover rounded-2xl p-8 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-3xl mb-6">
                <useCase.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                {useCase.features.map((feature) => (
                  <div key={feature} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;