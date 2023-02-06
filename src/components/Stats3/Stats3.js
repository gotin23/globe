import React from "react";

import Chart from "react-apexcharts";

export default function Stats3({ state }) {
  var options = {
    series: [
      state.ageOfPop[0],
      state.ageOfPop[1],
      state.ageOfPop[2],
      state.ageOfPop[3],
    ],
    chart: {
      type: "donut",
    },
    title: {
      text: "Age of Population",
      align: "center",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "rgb(228, 188, 26)",
      },
    },

    stroke: {
      colors: ["none"],
    },

    labels: [
      "0 to 14 years",
      "15 to 44 years",
      "45 to 59 years",
      "60 years or more",
    ],
    dataLabels: {
      style: {
        colors: ["#f1f1f1"],
        fontSize: "12px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },

          // legend: {
          //   position: 'bottom',
          //   show: true,
          // }
        },
      },
    ],
  };
  return (
    <div>
      <div className={`${state.animBounce}`}>
        <Chart
          options={options}
          series={options.series}
          type="donut"
          height={200}
        />
      </div>
    </div>
  );
}
