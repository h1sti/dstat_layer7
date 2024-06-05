import { useEffect, useState } from "react";
import Graph from "./components/graph";
import Statics from "./components/statics";

function App() {
  let [count, setCount] = useState(0);
  let [highestRs, setHighestRs] = useState(0);
  let [totalRs, setTotalRs] = useState(0);
  let [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    socket.onmessage = (event) => {
      setCount(Number(event.data));

      if (Number(event.data) >= highestRs || highestRs === 0) {
        setHighestRs(Number(event.data));
      }

      setTotalRs(totalRs + Number(event.data));

      setData((prev) => {
        const newData = [...prev, Number(event.data)];
        return newData;
      });
    };

    return () => socket.close();
  }, [setHighestRs, setData, setCount, highestRs, count]);

  return (
    <div className="w-screen h-screen bg-background overflow-hidden bg-gray-900">
      <Graph
        data={data}
        count={count}
        totalRs={totalRs}
        highestRs={highestRs}
      />

      <Statics
        count={count}
        totalRs={totalRs}
        highestRs={highestRs}
        data={data}
      />
    </div>
  );
}

export default App;
