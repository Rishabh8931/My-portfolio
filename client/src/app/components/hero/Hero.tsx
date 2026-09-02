import InvertedBox from "@/components/ui/InvertedBox";
import HeroTexts from "@/components/ui/HeroTexts";
import Button from "@/components/ui/Button";
import FloatingButtons from "../ui/FloatingButtons";
import SocialMediaLinks from "../ui/SocialMediaLinks";

export default function Hero() {
  return (
    <div
      className="
        grid
        min-h-[calc(100vh-80px)]
        grid-cols-1
        items-center
        gap-12
        px-[1vw]
        py-0
        md:grid-cols-2
        w-full
      "
    >
      {/* LEFT SIDE */}
      <div>
        <HeroTexts />
        {/**CTA Buttons */}
        <div className="mt-4 flex gap-4">
          <Button href="/#work" variant="primary" arrow="right">
            Explore my work
          </Button>

          <Button href="/#" variant="secondary" arrow="external">
            GitHub
          </Button>
        </div>

        {/** mini links */}

        <div className="mt-2">
          <SocialMediaLinks />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
    flex
    h-[clamp(400px,55vh,700px)]
    min-h-0
    items-center
    justify-center
  "
      >
        <div className="relative max-h-full">
          <InvertedBox src="/images/Hero-image.png" alt="Hero Image" />

          <FloatingButtons />
        </div>
      </div>
    </div>
  );
}
