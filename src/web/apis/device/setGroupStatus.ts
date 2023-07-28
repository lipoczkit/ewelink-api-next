import { BaseWebAPI } from "../../WebAPI.js";

export type groupInfo = {
  id: string;
  params: object;
};

export interface SetGroupStatus extends BaseWebAPI {}

export class SetGroupStatus {
  /**
   * Update the status of the group
   *
   * @param options - The group information.
   * @param options.id - The group id.
   * @param options.params - The group params.
   * @returns response - Please refer to the online API documentation
   *
   * @beta
   */
  async setGroupStatus(options: groupInfo) {
    const body = {
      id: options.id,
      params: options.params
    };
    return await this.root.request.post("/v2/device/group/status", body, {
      headers: {
        Authorization: `Bearer ${this.root.at}`
      }
    });
  }
}
