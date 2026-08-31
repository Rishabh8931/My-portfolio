import Image from "next/image";

type InvertedImageProps = {
  src: string;
  alt?: string;
};

export default function InvertedBox({ src, alt = "" }: InvertedImageProps) {
  return (
    <div
      className="
    inverted-shape
    aspect-square
    h-[clamp(280px,58vh,650px)]
    w-auto
    max-w-full
    overflow-hidden
    bg-[#513d34]
  "
    >
      <Image
        width={650}
        height={650}
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
