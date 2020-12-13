import { route } from "next/dist/next-server/server/router";
import { people } from "../../../data";
import withMiddleware from "../../../withMiddleware";

function handler(req, res) {
  res.status(200).json(people);
}

export default withMiddleware(handler);
