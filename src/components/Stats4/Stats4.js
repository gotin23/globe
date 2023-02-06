import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function Stats4({ state }) {
  var options = {
    series: [
      {
        name: "Desktops",
        data: [
          state.evolutionPop[0],
          state.evolutionPop[1],
          state.evolutionPop[2],
          state.evolutionPop[3],
          state.evolutionPop[4],
          state.evolutionPop[5],
          state.evolutionPop[6],
          state.evolutionPop[7],
          state.evolutionPop[8],
          state.evolutionPop[9],
          state.evolutionPop[10],
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: true,
        tools: {
          download: false, // <== line to add
        },
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Evolution of population",
      align: "center",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "rgb(228, 188, 26)",
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["rgb(228, 188, 26)"],
    xaxis: {
      categories: [
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "2000",
        "2010",
        "2020",
      ],
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: "rgb(228, 188, 26)",
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "rgb(228, 188, 26)",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  };
  return (
    <div className={`${state.animBounce}`}>
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={200}
      />
    </div>
  );
}
