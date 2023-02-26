import { request } from "../utils/axios-utils.ts";

export const getEventParticipantAttendence = async ({ event_id = 1, date = "27-02-2023" }) => {
    return request({
        url: "/event-participant-attendence",
        params: { event_id, date },
    });
};
