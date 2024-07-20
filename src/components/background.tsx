import Image from "next/image";
import Container from "./container";

interface BackgroundProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  containerClassName?: string;
  src: string;
}

const Background = ({ src, className, children, containerClassName }: BackgroundProps) => {
  return (
    <figure className={`relative text-light shadow-lg ${containerClassName}`}>
      <Image src={src} alt="background image" fill priority objectFit="cover" objectPosition="center" className="-z-10" />
      <Container className={`z-1 relative flex ${className}`}>{children}</Container>
    </figure>
  );
};

export default Background;
