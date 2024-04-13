import NextAuth from "next-auth";
import authOptions from "./nextAuth"; // Importamos las opciones de autenticación desde el archivo nextAuth.ts

// Exportamos una función de ruta que maneja las solicitudes a /api/auth
export default NextAuth(authOptions);

// Esta es una función de manejo de solicitudes para otras solicitudes en la ruta /api/auth
export async function handler(req: any, res: any) {
  // Aquí manejas la lógica de las solicitudes
}
