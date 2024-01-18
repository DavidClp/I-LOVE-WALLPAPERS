
import { ImagemApi } from "@/app/services/use-imagens";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


export function UseDataImagens(page: number) {

  const query = useQuery({
    queryKey: ["allImages", page],
    queryFn: () => ImagemApi.doDataTodasImagens(page),
    placeholderData: keepPreviousData,
    staleTime: 60000
  },

   );

  return query;
}
