import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import './Analysis.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Attended", "Not Attended"],
    // ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "Sadhaks",
            data: [12, 3],
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
        },
    ],
};

export function Analysis() {
    return (
        <div className="pieChart">
            <Pie data={data} />
        </div>
    );
}
