export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/views/entidades", "/views/medProfs", "/views/processo", "/views/funcionarios"],
  
  // matcher: ["/((?!register|api|login).*)"],
};
