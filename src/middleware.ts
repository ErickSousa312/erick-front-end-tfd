export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/processo"],
  // matcher: ["/((?!register|api|login).*)"],
};
