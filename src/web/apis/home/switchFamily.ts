import { BaseWebAPI } from "../../WebAPI.js";

export type baseInfo = {
  familyid: string;
};

export interface SwitchFamily extends BaseWebAPI {}

export class SwitchFamily {
  /**
   * Switch Current Family
   * @description Switch to the default family
   *
   * @param options - The base information.
   * @param options.familyid - Target Family ID.
   *
   * @returns response - Please refer to the online API documentation
   *
   * @beta
   */
  async switchFamily(options: baseInfo) {
    const body = {
      id: options.familyid
    };
    return await this.root.request.post("/v2/family/current", body, {
      headers: {
        Authorization: `Bearer ${this.root.at}`
      }
    });
  }
}
