import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getParticipantsByGroupId } from "../../apis/ApiParticipant";
import Navbar from "../../components/Dashboard/Navbar/Navbar";

function SadhaksPage() {
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: data => data.data.data,
    });
    console.log("sadhaks data is", data);
    return <div>
      <Navbar />
    </div>;
}

export default SadhaksPage;
