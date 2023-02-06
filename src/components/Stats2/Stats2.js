import React from "react";
import Chart from "react-apexcharts";

export default function Stats2({ state }) {
  var options = {
    series: [state.percentageOfPoor],
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "rgb(228, 188, 26)",
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: "rgb(228, 188, 26)",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      colors: ["rgb(228, 188, 26)"],
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Under poverty level"],
  };

  return (
    <div className={`${state.animBounce}`}>
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={200}
      />
    </div>
  );
}
