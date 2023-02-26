import { request } from "../utils/axios-utils.ts";

export const getEventsByGroupId = async ({ group_id }) => {
    return request({
        url: "/particpants",
    });
};
