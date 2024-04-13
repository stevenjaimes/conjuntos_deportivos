import NextAuth from "next-auth";
import { authOptions } from "../../../auth.config";
import { NextApiRequest, NextApiResponse } from "next";

// Exporta funciones con nombre para métodos HTTP (si es necesario)
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Tu lógica personalizada usando req y res (opcional)
  return NextAuth(req, res, authOptions);
}