import { RequestHandler } from "atom";

const handler: RequestHandler = (req) => {
    return new Response(`Hello worlds your url is ${req.url} `);
};

export const middlewares = [];

export default handler;
