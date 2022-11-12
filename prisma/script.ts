import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const insertProducts = await prisma.products.createMany({
    data: [
      {
        name: "MSI H410M PRO-VH",
        brand: "MSI",
        categories: "Motherboard",
        stock: 1,
        price: 1000000,
      },
      {
        name: "MSI B560M-A PRO",
        brand: "MSI",
        categories: "Motherboard",
        stock: 1,
        price: 1500000,
      },
      {
        name: "Intel Core i5 10400F",
        brand: "Intel",
        categories: "CPU",
        stock: 1,
        price: 2000000,
      },
    ],
  });
  console.log("insertProducts >>", insertProducts);
  console.log("Show table products....");
  const productsData = await prisma.products.findMany();
  console.log(productsData);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
