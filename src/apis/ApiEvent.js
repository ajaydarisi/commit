import { request } from "../utils/axios-utils";

export const getEventsByGroupId = async ({ group_id }) => {
    return request({
        url: "/events",
        params: { group_id },
    });
};
