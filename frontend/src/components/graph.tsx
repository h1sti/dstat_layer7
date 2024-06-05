import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Graph(props: {
  count: number;
  totalRs: number;
  highestRs: number;
  data: number[];
}) {
  const options: Highcharts.Options = {
    chart: {
      type: "areaspline",
      backgroundColor: "rgba(0, 0, 0, 0)",
      marginRight: 10,
      style: {
        fontFamily: "Arial",
      },
    },
    time: {
      useUTC: false,
    },
    title: {
      text: "",
      style: {
        color: "#E0E0E3",
      },
    },
    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
    },
    yAxis: {
      title: {
        text: "Requests per Second",
        style: {
          color: "#E0E0E3",
        },
      },
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#707073",
        },
      ],
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#F0F0F0",
      },
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y} r/s",
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },

        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, Highcharts.color("#ff0000").setOpacity(0.6).get("rgba")], // Top of gradient
            [1, Highcharts.color("#ff0000").setOpacity(0.1).get("rgba")], // Transparent at the bottom
          ],
        },
        dataLabels: {
          color: "#F0F0F0",
        },
      },
    },
    legend: {
      itemStyle: {
        color: "#E0E0E3",
      },
      itemHoverStyle: {
        color: "#FFF",
      },
      itemHiddenStyle: {
        color: "#606063",
      },
    },
    credits: {
      style: {
        color: "#666",
      },
    },
    series: [
      {
        type: "areaspline",
        name: "Requests per second",
        color: "#FF0000", // Maintaining the red color for the data line
        data: props.data,
      },
    ],
  };

  return (
    <div className="relative pt-12">
      <div className="pt-12">
        <p className="flex flex-col justify-center items-center text-2xl font-bold text-white">
          https://127.0.0.1:8080/hit
        </p>

        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />{" "}
        </div>
      </div>
    </div>
  );
}
