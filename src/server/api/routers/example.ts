import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input, ctx }) => {
      return {
        greeting: `Hello ${input.text}, ${ctx.auth.userId}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  sample: publicProcedure.query(() => {
    return {
      current_time: new Date().getTime(),
    };
  }),
});
