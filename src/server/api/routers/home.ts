import { Property } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const homeRouter = createTRPCRouter({
  createProperty: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        statusId: z.number(),
        typeId: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const basic: Omit<Property, "id"> = {
        name: input.name,
        description: input.description,
        price: input.price,
        statusId: input.statusId,
        typeId: input.typeId,
        userId: input.userId,
      };

      const result = await ctx.db.property.create({
        data: {
          ...basic,
        },
      });
    }),

  // getLatest: protectedProcedure.query(async ({ ctx }) => {
  //   const post = await ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });

  //   return post ?? null;
  // }),
});
