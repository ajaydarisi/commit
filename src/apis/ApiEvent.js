import { request } from "../utils/axios-utils.ts";

export const getEventsByGroupId = async ({ group_id = 1 }) => {
    return request({
        url: "/events",
        params: { group_id: group_id },
    });
    // await axios.get("http://192.168.0.109:4000/events", { group_id: group_id });
};
