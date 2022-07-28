import { createRouter } from "./context";
import { z } from "zod";

export const courseRouter = createRouter()
  .mutation("create-course", {
    input: z
      .object({
        ownerId: z.string(),
        
      }),
    async resolve({ input }) {
      return await ctx.prisma.course.create()
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.course.findMany();
    },
  });
