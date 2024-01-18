import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { UseDataImagens } from "../stores/use-imagens/use-data-imagens";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ImageList() {
  const [page, setPage] = useState(1);
  const { data: dataImagens } = UseDataImagens(page);
  
  return (
    <div>

      <div className="flex gap-6 items-center justify-center py-4">
        <Button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
          Voltar
        </Button>
        <p className="text-xl">{page}</p>
        <Button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === dataImagens?.info.pages}
        >
          Avançar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {dataImagens?.imagens?.map((imagem) => (
          <div key={imagem.imgId} className="cursor-pointer hover:brightness-75">
            <Link href={`${imagem.categoria}/${imagem.imgId}`}>
              <Image
                src={imagem.url}
                alt="trocar"
                width={400}
                height={400}
                className="rounded-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
