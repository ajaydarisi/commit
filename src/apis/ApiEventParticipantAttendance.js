import { request } from "../utils/axios-utils.ts";

export const getEventParticpantsByGroupId = async ({ group_id }) => {
    return request({
        url: "/events-participants-attendance",
    });
};
