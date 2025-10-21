import Image from "next/image";
import Navbar from "./Navbar";
import Map from "./floor-map-page";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-8 py-8">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="mb-8 p-6 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Random Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.
            </p>
          </div>
        ))}
        <div className="flex justify-center mt-12">
          <Map />
        </div>
      </main>
    </>
  );
}
