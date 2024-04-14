import { getServerSession } from "next-auth";
import { authOptions } from "../../nextauth";

export default async function getUserSession() {
  return await getServerSession(authOptions);
}
