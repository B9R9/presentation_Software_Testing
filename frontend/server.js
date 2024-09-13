import { Application, Router, send } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { join } from "https://deno.land/std@0.222.1/path/mod.ts";

const app = new Application();
const router = new Router();


router.get("/(.*)", async (context) => {
  await context.send({ root: join(Deno.cwd(), "public"), index: "index.html" });
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");

await app.listen({ port: 8000 });