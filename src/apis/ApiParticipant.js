import { request } from "../utils/axios-utils.ts";

export const getParticipantsByGroupId = async ({ group_id }) => {
    return request({
        url: "/participants",
    });
};
