import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const videoRouter = createTRPCRouter({
  create: privateProcedure
    .input(z.object({ videoUrl: z.string(), silentDataWebhook: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await clerkClient.users.getUser(ctx.auth.userId);

      if (!user) {
        throw new Error("No user");
      }

      const walletAddress = user.web3Wallets.find(
        (item) => item.id === user.primaryWeb3WalletId
      )?.web3Wallet;

      if (!walletAddress) {
        throw new Error("No wallet");
      }

      await ctx.prisma.video.deleteMany();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return ctx.prisma.video.create({
        data: {
          videoUrl: input.videoUrl,
          silentDataHook: input.silentDataWebhook,
          walletAddress,
        },
      });
    }),
  getVideo: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.video.findFirst();
  }),
  triggerHook: privateProcedure.mutation(async ({ ctx }) => {
    const video = await ctx.prisma.video.findFirst();

    if (!video?.silentDataHook) {
      throw new Error("No web hook");
    }

    const res = await fetch(video.silentDataHook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    console.log("status", res.status);

    return {
      status: res.status,
    };
  }),
  deleteAll: privateProcedure.query(async ({ ctx }) => {
    await ctx.prisma.video.deleteMany();
  }),
});
