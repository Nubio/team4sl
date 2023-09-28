import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import { type NextMiddlewareResult } from "next/dist/server/web/types";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/undefinedmiddleware for more information about configuring your middleware

export default authMiddleware({
  publicRoutes: ["/api/trpc/example.hello"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
