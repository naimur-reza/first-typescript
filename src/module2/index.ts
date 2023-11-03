// type assertion

const MeterToCentimeter = (meter: any): string | number | undefined => {
  if (typeof meter === "number") return meter * 100;
  if (typeof meter === "string") return parseFloat(meter) * 100;
};

const result = MeterToCentimeter(100) as number; // that's called type assertion
console.log(result);
