import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function MotivationSections() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = [
    {
      title: 'Study Smarter, Not Harder',
      messages: [
        'Focus on understanding, not just memorizing',
        'Quality over quantity - deep work creates lasting knowledge',
        'Strategic learning compounds over time'
      ]
    },
    {
      title: 'Consistency Beats Intensity',
      messages: [
        'Small daily improvements add up to massive results',
        'Show up every day, even when motivation is low',
        'Build sustainable study habits that last'
      ]
    },
    {
      title: 'AI Empowers You',
      messages: [
        'Use AI as your study partner, not a replacement',
        'Leverage technology to amplify your learning',
        'Stay curious, stay engaged, stay ahead'
      ]
    },
    {
      title: 'Progress Over Perfection',
      messages: [
        'Every step forward matters, no matter how small',
        'Learn from mistakes, they are your best teachers',
        'Celebrate growth, not just grades'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="mt-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.map((item, index) => (
         <div
  key={index}
  className={`relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 overflow-hidden cursor-pointer transform transition-all duration-700 ease-out ${
    isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-6'
  }`}
  style={{ transitionDelay: `${index * 150}ms` }}
>

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative">
              <Sparkles className="w-7 h-7 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-4 text-lg">{item.title}</h3>
              <div className="space-y-2.5">
                {item.messages.map((message, msgIndex) => (
                  <p key={msgIndex} className="text-gray-300 text-sm leading-relaxed">
                    • {message}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
