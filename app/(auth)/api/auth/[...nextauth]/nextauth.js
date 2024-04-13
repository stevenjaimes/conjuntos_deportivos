import NextAuth from "next-auth";
import { authOptions } from "./auth"; // Importa la configuración

export default NextAuth(authOptions);
