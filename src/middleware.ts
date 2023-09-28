import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/undefinedmiddleware for more information about configuring your middleware

export default authMiddleware({
  publicRoutes: ["/api/trpc/example.hello", "/api/trpc/example.sample"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
