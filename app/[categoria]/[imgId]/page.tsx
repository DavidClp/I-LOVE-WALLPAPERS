'use client'
 
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UseDataImagem } from "../../stores/use-imagens/use-data-imagem";
import Image from "next/image";
import DownloadButton from "./components/download-button";

interface Props {
  categoria: string;
  imgId: string;
}

export default function Page({
  params,
}: {
  params: { categoria: string; imgId: string };
}) {
  const imgId = Number(params.imgId);

  const { data: imagem, isError } = UseDataImagem({ imgId });

  if (!imagem || isError) return <h1>Imagem não encontrada</h1>;
  return (
    <div className="flex items-center justify-center">
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-4xl">{imagem?.nome}</CardTitle>
        </CardHeader>
        <CardDescription className="flex items-center justify-center md:px-4">
          <Image src={imagem.url} alt={imagem?.nome} width={900} height={900} />
        </CardDescription>
        <CardFooter className="mt-6 justify-end p-0 py-6 md:px-4">
          <DownloadButton imagemUrl={imagem.url} fileName={imagem?.nome} extensao={imagem.extensao}/>
        </CardFooter>
      </Card>
    </div>
  );
}
