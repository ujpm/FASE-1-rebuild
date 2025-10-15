const Hero = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold">
          <span className="inline-block mx-2 opacity-0 animate-fadeInUp">
            Learn
          </span>
          <span className="inline-block mx-2 opacity-0 animate-fadeInUp delay-200">
            Act
          </span>
          <span className="inline-block mx-2 opacity-0 animate-fadeInUp delay-400">
            Save
          </span>
        </h1>
        <p className="text-xl mt-4">
          Empowering communities to save lives through knowledge and action
        </p>
        <div className="mt-8 text-lg italic border-l-4 border-red-500 pl-4">
          &quot;In the critical moments between emergency and professional
          help, knowledge saves lives.&quot;
        </div>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Start Training
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded">
            Report Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;