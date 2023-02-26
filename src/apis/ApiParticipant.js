import { request } from "../utils/axios-utils.ts";

export const getParticipantsByGroupId = async ({ group_id = 1 }) => {
    return request({
        url: "/participants",
        params: { group_id: group_id },
    });
};
