import { PrismaClient } from "@prisma/client";
import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient | undefined;

function createClient() {
  if (!prismaClient) {
    console.log('creating prisma client...');
    prismaClient = new PrismaClient({
      log:
        env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  }

  return prismaClient;
}

export const prisma =
  globalForPrisma.prisma ??
  createClient(); 

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
