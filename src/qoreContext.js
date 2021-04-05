import { QoreClient } from "@feedloop/qore-client";
import createQoreContext from "@feedloop/qore-react";
import config from "./qore.config.json";
import schema from "./qore.schema.json";
import Cookies from "js-cookie";

const client = new QoreClient({
  ...config,
  getToken: () => Cookies.get("token"),
});
// const client = new QoreClient(config);
client.init(schema);
const qoreContext = createQoreContext(client);
export default qoreContext;
export { client };
