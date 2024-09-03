import Header from "@/components/header";
import Main from "@/components/main";
import MouseFollower from "@/components/mouse-follower";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <MouseFollower />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}
