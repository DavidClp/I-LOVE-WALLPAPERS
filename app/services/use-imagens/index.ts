import axios from "axios";
import { ImagemSchema } from "./schemas/do-data-imagens-response";
import { DoPage } from "./schemas/doDataPage";

const BASE_URL = "https://i-love-wallpapers-api-production.up.railway.app/api/";

async function doDataTodasImagens(page: number): Promise<DoPage<ImagemSchema>> {
  const response = await axios.get<DoPage<ImagemSchema>>(
    `${BASE_URL}imagem/?page=${page}`
  );

  return response.data;
}


async function doDataImagem(imgId?: number) {
  try {
    const response = await axios.get<ImagemSchema>(
      `${BASE_URL}imagem/${imgId}`
    );

    return response.data;
  } catch (error) {
    console.error("Erro durante a solicitação:");
  }
}

export const ImagemApi = {
  doDataTodasImagens,
  doDataImagem,
};
