export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: "Воздуховоды",
      count: 48,
      priceFrom: 1200,
      image: "/images/products/image-1.png",
    },
    {
      id: 2,
      name: "Круглые фасонные\n части",
      count: 48,
      priceFrom: 1200,
      image: "/images/products/image-2.png",
    },
    {
      id: 3,
      name: "Прямоугольные фасонные части",
      count: 48,
      priceFrom: 1200,
      image: "/images/products/image-3.png",
    },
    {
      id: 4,
      name: "Элементы систем вентиляции",
      count: 48,
      priceFrom: 1200,
      image: "/images/products/image-4.png",
    },
    {
      id: 5,
      name: "Нестандартные изделия",
      count: 48,
      priceFrom: 1200,
      image: "/images/products/image-5.png",
    },
  ]

  return {
    products,
  }
}