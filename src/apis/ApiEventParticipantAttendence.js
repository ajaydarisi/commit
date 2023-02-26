import { request } from "../utils/axios-utils.ts";

export const getEventParticipantAttendence = async data => {
    const event_id = data.queryKey[1] || 1;
    const date = data.queryKey[2] || "27-02-2022";
    return request({
        url: "/event-participant-attendence",
        params: { event_id, date },
    });
};
export const mutateEventParticipantAttendence = async data => {
    return request({
        url: "/event-participant-attendence",
        method: "PATCH",
        data: data,
    });
};
