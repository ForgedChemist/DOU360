import Image from "next/image";
import Navbar from "./Navbar";
import Map from "./floor-map-page";
export default function Home() {
  return (
    <>
      <main className="px-8 py-8">
        <div className="flex justify-center mt-12">
          <Map />
        </div>
      </main>
    </>
  );
}
