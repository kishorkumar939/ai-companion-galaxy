import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our AI Assistant',
      features: [
        '50 messages per month',
        'Basic task automation',
        'Standard response time',
        'Email support'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Best for individuals and small teams',
      features: [
        'Unlimited messages',
        'Advanced automation',
        'Priority response time',
        'File uploads & analysis',
        'Custom integrations',
        '24/7 chat support'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'Designed for large organizations',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'Advanced analytics',
        'Team management',
        'API access',
        'Dedicated support',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-gradient card-hover rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'btn-hero' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;