import { PrismaClient } from "@prisma/client";

const globalForPrisma = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof global !== "undefined") return global;
  if (typeof window !== "undefined") return window;
  if (typeof self !== "undefined") return self;
  throw new Error("Unable to locate global object");
})();

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Use existing instance if available, otherwise create new one
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  // Keep reference to the instance during development
  globalForPrisma.prisma = prisma;
}

export default prisma;
