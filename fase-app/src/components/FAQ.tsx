"use client";
import { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const faqs = [
    {
      question: 'How does FASE-1 work offline?',
      answer: 'Once you load FASE-1, all essential training materials are cached on your device. This means you can access life-saving information even without an internet connection - perfect for rural areas with limited connectivity.',
    },
    {
      question: 'What training modules are available?',
      answer: 'FASE-1 offers 12 comprehensive modules including cardiac emergencies, childbirth, burns, asthma, and more. Each module features interactive learning materials, visual guides, and practice scenarios.',
    },
    {
      question: 'Is FASE-1 available in multiple languages?',
      answer: 'Currently, FASE-1 is available in English, with plans to expand to local languages to better serve our communities. Our goal is to make life-saving knowledge accessible to everyone.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <h5 className="text-lg font-semibold">{faq.question}</h5>
                <i
                  className={`fas fa-chevron-down transition-transform ${
                    open === index ? 'transform rotate-180' : ''
                  }`}
                ></i>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  open === index ? 'max-h-96 p-4' : 'max-h-0 p-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;