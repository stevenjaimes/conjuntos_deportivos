import { getServerSession } from "next-auth";
import { authOptions } from "../auth.config";

export default async function getUserSession() {
  return await getServerSession(authOptions);
}
