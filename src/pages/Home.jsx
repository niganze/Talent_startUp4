import backgroundImage from '../assets/home.jpg';

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Gate Guard Visitor Notification System
        </h1>
        <p className="text-lg md:text-xl text-white">
          Effortlessly connect visitors and homeowners with our modern Gate Guard System.
        </p>
      </div>
    </div>
  );
}

export default Home;
