import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e.stack);
    await prisma.$disconnect();
    process.exit(1);
  });
