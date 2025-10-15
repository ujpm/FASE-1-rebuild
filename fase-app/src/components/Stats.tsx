const Stats = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Why FASE-1 Matters</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-heartbeat text-red-500 mr-3 mt-1"></i>
                <span>
                  5.8 million lives are lost annually due to delayed emergency
                  response
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-female text-red-500 mr-3 mt-1"></i>
                <span>
                  810 women die daily from preventable childbirth complications
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-mobile-alt text-red-500 mr-3 mt-1"></i>
                <span>
                  68% of people in underserved areas have mobile phones - making
                  our solution accessible
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p>
              FASE-1 bridges the gap between emergencies and professional help
              through:
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <i className="fas fa-book-medical text-blue-500 mr-3 mt-1"></i>
                <span>12 comprehensive training modules</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-wifi-slash text-blue-500 mr-3 mt-1"></i>
                <span>Complete offline functionality</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-users text-blue-500 mr-3 mt-1"></i>
                <span>
                  Community-based approach inspired by Rwanda&apos;s health
                  worker program
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;