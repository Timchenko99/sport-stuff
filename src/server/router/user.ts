import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter()
  .mutation("register-user", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("me", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  });
