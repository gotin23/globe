import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import './CityStats.css'

export default function Stats2( {state} ) {
  console.log(state.animBounce)
   const series = [
     {
       name: "Population",
       data: [{
        x: state.city,
        y: state.popu,
        fillColor: '#EB8C87',
        strokeColor: '#C23829',
      }, {
        x: 'Tokyo',
        y: 13.96,
        
      }, {
        x: 'Berlin',
        y: 3.635
      }
      , {
        x: 'Rome',
        y: 2.873
      },
       {
        x: 'Bombay',
        y: 18.414
      },
       
       ],
    },
    
   ];

  const [stateCityStats] = useState({
    options: {
      chart: {
        type: "bar",
        height: 250,
        toolbar: {
          show: true,
          tools:{
            download:false // <== line to add
          },}
      },grid: {
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        }
    },     
      //pour changer la couleur des bars
      // fill: {
      //   colors: ['#F44336', '#E91E63', '#9C27B0']
      // },
      // pour changer la couleur de la valeur
      // dataLabels: {
      //   style: {
      //     colors: ['#F44336', '#E91E63', '#9C27B0']
      //   }
      // },    
      // },
      dataLabels: {
        style: {
          colors: ['white'],
          fontSize: '10px',
          
        }
      },
      yaxis: {
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
              colors:"rgb(228, 188, 26)",
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
      },},
      

      xaxis: {
       
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
                colors:"rgb(228, 188, 26)",
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
            
        },
      
      
        axisBorder: {
            show: false,
            color: '#78909C',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
       
        
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0,
            },
        },
    },
      title: {
        text: "Population",
        align: 'center' ,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  "rgb(228, 188, 26)",
        },
      },
      colors: [
        "rgb(228, 188, 26)",
        "#E91E63",
        "#9C27B0",
        "#F44336",
        "#E91E63",
        "#9C27B0",
      ],
    },
  });

  return (
    <div className={`${state.animBounce}`}>
      <Chart
        options={stateCityStats.options}
        series={series}
        type="bar"
        height={200}
        
      />
    </div>
  );
}