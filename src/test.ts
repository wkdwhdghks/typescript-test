type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChangert<T> = {
  [key in keyof T]: string | number;
};

type s = TypeChangert<Bus>;
