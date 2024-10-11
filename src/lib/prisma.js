import { PrismaClient } from "@prisma/client";

/**
 * @returns {PrismaClient} An instance of PrismaClient.
 */
const prismaClientSingleton = () => {
  return new PrismaClient();
};

/**
 * @type {PrismaClient | undefined}
 */
export const prisma = globalThis.prismaGlobal || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  /**
   * @type {PrismaClient}
   */
  globalThis.prismaGlobal = prisma;
}
