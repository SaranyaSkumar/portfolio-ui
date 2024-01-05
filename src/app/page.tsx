import Basics from "@/components/Basics";
import Experience from "@/components/Experience";
// import Header from "@/components/Header";
import ProfileCard from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 font-sans">
      {/* <Header /> */}
      <div className="mb-32 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-left lg:gap-x-6 mt-10">
        <div className="lg:col-span-5">
          {/* <Basics /> */}
          <ProfileCard />
        </div>
        <div className="lg:col-span-7">
          <Experience />
        </div>
      </div>
    </main>
  );
}
