import Image from "next/image";
import bgHeader from "../../../public/bg-header.jpg";

export default function ImgFundo() {
  return (
    <div className="absolute">
      <Image src={bgHeader} alt="Foto cabeçalho " />
      <div className="absolute inset-0 h-[100%] bg-gradient-to-t from-zinc-900 to-transparent"></div>
    </div>
  );
}
