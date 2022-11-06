import { router } from "../trpc";
import { authRouter } from "./auth";
import { productsRouter } from "./productsRouter";

export const appRouter = router({
  auth: authRouter,
  productsRouter: productsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
