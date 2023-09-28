import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const videoRouter = createTRPCRouter({
  create: privateProcedure
    .input(z.object({ videoUrl: z.string(), silentDataWebhook: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await clerkClient.users.getUser(ctx.auth.userId);

      if (!user?.web3Wallets) {
        throw new Error("Nope");
      }

      return ctx.prisma.video.create({
        data: {
          videoUrl: input.videoUrl,
          silentDataHook: input.silentDataWebhook,
          walletAddress: user?.web3Wallets[0].web3Wallet,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
