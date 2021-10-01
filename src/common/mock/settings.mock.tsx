import { Server } from "miragejs";

// THIS IS A FAKE SERVICE
const settingsMock = () => {
  new Server({
    routes() {
      this.namespace = "api";

      this.get("/default/", () => {
        return { response: "ok" };
      });
    },
  });
};

export default settingsMock;
