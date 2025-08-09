import TextType from "@/components/ui/TextType";
import Button from "@/components/ui/Button";
import DarkVeil from "@/components/ui/DarkVeil";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <>
      <div className="relative h-150 w-full">
        <DarkVeil speed={1} />
        <Header />
      </div>
      <main className="absolute top-90 flex flex-col items-start justify-center px-18">
        <h1 className="mb-4 cursor-default text-5xl font-semibold text-[oklch(0.95_0_0)] transition-all duration-300 ease-in-out sm:text-6xl md:text-7xl">
          The AI Training App
        </h1>
        <TextType
          text={[
            "The smartest training app ever built",
            "Designed to take your training to the next level",
          ]}
          className="mb-8 h-13 cursor-default text-lg"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
        <Button text="Try For Free" long={false} />
      </main>
    </>
  );
}
