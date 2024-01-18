
import { ImagemApi } from "@/app/services/use-imagens";
import { useQuery } from "@tanstack/react-query";

interface Props{
  imgId?: number 
}

export function UseDataImagem({imgId}: Props) {
  const query = useQuery({
    queryKey: ["imagem", imgId],
    queryFn: () => ImagemApi.doDataImagem(imgId),
  });

  return query;
}
