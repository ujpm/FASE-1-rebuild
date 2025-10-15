import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <Image
              src="https://via.placeholder.com/200"
              alt="Jean Pierre"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-red-500"
            />
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:uwizeyimanajp2@gmail.com"
                className="text-blue-600 hover:text-red-500"
              >
                <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a
                href="https://wa.me/250737787395"
                className="text-blue-600 hover:text-red-500"
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com/in/ujeanpierre45"
                className="text-blue-600 hover:text-red-500"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">About FASE-1</h2>
            <p className="text-lg mt-4">
              Created by Uwizeyimana Jean Pierre, a medic and self made
              developer, for the Minimedi 2024 Hackathon.
            </p>
            <p className="mt-4">
              FASE-1 emerged from a vision to democratize emergency response
              knowledge. A someone who has witnessed how the lack of basic first
              aid knowledge affects communities. This platform is more than just
              an app - it&apos;s a movement to empower individuals with
              life-saving skills.
            </p>
            <p className="mt-4">
              Built with pure web technologies for maximum accessibility, FASE-1
              features 12 interactive modules covering critical emergencies. Our
              approach combines storytelling, quizzes, and real-life scenarios
              to make learning engaging and effective.
            </p>
            <p className="text-4xl font-bold mt-4">Learn-Act-Save</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;