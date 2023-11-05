interface AreaString {
  height: string;
  width: string;
}

// make this area string to number using type map

type AreaNumber = {
  [key in keyof AreaString]: number;
};
