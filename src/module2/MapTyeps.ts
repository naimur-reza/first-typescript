interface AreaString {
  height: string;
  width: string;
}

// this is lookup type

type Height = AreaString["height"];

// make this area string to number using type map

type AreaNumber = {
  [key in keyof AreaString]: number;
};

// this is generic re useable map type
type AreaCustom<T> = {
  [key in keyof T]: T[key];
};

const area: AreaCustom<{ height: number; width: string }> = {
  width: "100",
  height: 200,
};
