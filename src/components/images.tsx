import Image from "next/image";

interface ImagesProps {
  src: string;
  width: number;
  height: number;
  description: string;
}

const Images = ({ src, width, height, description }: ImagesProps) => {
  return <Image src={src} width={width} height={height} alt={description} className="duration-300" />;
};

export default Images;
