import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Graph(rs: number) {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [{}],
  };

  return (
    <div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
