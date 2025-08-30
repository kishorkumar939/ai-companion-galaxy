import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'This AI Assistant has completely transformed how I manage my daily tasks. The automation features save me hours every week.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Graduate Student',
      company: 'MIT',
      content: 'As a student, this tool has been invaluable for research and writing. It helps me organize my thoughts and find relevant sources quickly.',
      rating: 5,
      avatar: '👨‍🎓'
    },
    {
      name: 'Emily Watson',
      role: 'Small Business Owner',
      company: 'Watson Designs',
      content: 'The customer support automation has been a game-changer for my business. I can focus on creativity while the AI handles routine inquiries.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'David Kim',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      content: 'Incredibly powerful and intuitive. The AI understands context better than any tool I\'ve used before. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      company: 'Growth Co.',
      content: 'The content creation capabilities are outstanding. It helps me generate ideas and draft campaigns much faster than before.',
      rating: 5,
      avatar: '👩‍🚀'
    },
    {
      name: 'Alex Thompson',
      role: 'Consultant',
      company: 'Independent',
      content: 'Perfect for managing multiple clients and projects. The scheduling and reminder features keep me organized and on track.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their productivity with our AI Assistant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-gradient card-hover rounded-2xl p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;