// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Heading */}
      <h1 className="text-4xl text-center font-serif  p-1 text-blue-800">
        Welcome to
      </h1>
      <h1 className="text-4xl text-center font-serif  p-1 text-blue-800"> Firoza Khatoon Women College</h1>

      <section className="mb-8 text-center">

      {/* Local Video */}
      
        <video
          width="1000" // Custom width
          height="900" // Custom height
          controls
          className="rounded-md border-2 border-gray-300 shadow-md"
          poster="/thumbnail.png" 
        >
          <source src="/backgroundvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

    </main>
  );
}
