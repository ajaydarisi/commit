import { request } from "../utils/axios-utils.ts";

export const getEventParticipantAttendence = async (data) => {
    const event_id = data.queryKey[1] || 1;
    const date = data.queryKey[2] || "27-02-2022";
    console.log(data, "api");
    return request({
        url: "/event-participant-attendence",
        params: { event_id, date },
    });
};
export const mutateEventParticipantAttendence = async ({ data, event_id, date }) => {
    return request({
        url: "/event-participant-attendence",
        method: "PATCH",
        data: { data: data, event_id: event_id, date },
    });
};
