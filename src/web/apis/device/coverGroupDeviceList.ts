import { BaseWebAPI } from "../../WebAPI.js";

export type groupInfo = {
  id: string;
  coverDeviceidList: string[];
};

export interface CoverGroupDeviceList extends BaseWebAPI {}

export class CoverGroupDeviceList {
  async coverGroupDeviceList(options: groupInfo) {
    if (options.coverDeviceidList.length < 1 || options.coverDeviceidList.length > 30) {
      throw new Error("addDeviceidList length must be between 1 and 30");
    }
    const body = {
      id: options.id,
      deviceidList: options.coverDeviceidList
    };
    return await this.root.request.post("/v2/device/group/update", body, {
      headers: {
        Authorization: `Bearer ${this.root.token}`
      }
    });
  }
}
