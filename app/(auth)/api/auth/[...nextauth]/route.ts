import { handlers } from "../../../../nextAuth"
export const { GET, POST } = handlers


GET.authUrl = "/api/auth/[...nextauth]";

console.log(GET.authUrl)