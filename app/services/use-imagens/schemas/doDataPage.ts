export interface DoPage<T>  {
    info: {
      count: number;
      pages: number;
    };
    imagens: Array<T>;
  };