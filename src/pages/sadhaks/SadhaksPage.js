import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getParticipantsByGroupId } from "../../apis/ApiParticipant";

function SadhaksPage() {
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: data => data.data.data,
    });
    console.log("sadhaks data is", data);
    return <div>SadhaksPage</div>;
}

export default SadhaksPage;
