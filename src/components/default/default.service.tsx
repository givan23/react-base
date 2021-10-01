import axios from "axios";
import settingsMock from "../../common/mock/settings.mock";

export const getDataService = async (): Promise<any> => {
  settingsMock(); // comment it for remove mock
  return await axios.get("/api/default/");
};
