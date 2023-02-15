import { MiddlewareHandler, RequestHandler } from "@/types.ts";

const _ageMiddleware: MiddlewareHandler = (req) => {
  const searchString = new URL(req.url).search;
  const searchParams = new URLSearchParams(searchString);
  const age = searchParams.get("age");
  if (!age || +age < 18) return new Response("You are unauthorized", { status: 401 });
};

const handler: RequestHandler = (req) => {
  return new Response(`Hello worlds your url is ${req.url} `);
};

export const middlewares = [];

export default handler;
