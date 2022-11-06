import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const productsRouter = router({
  getProdutcs: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.products.findFirst({
      where: {
        id: input,
      },
    });
  }),
});
