import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export default function Statics(props: {
  count: number;
  totalRs: number;
  highestRs: number;
  data: number[];
}) {
  return (
    <div className="grid gap-1">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto ">
        <Card className="flex flex-col bg-gray-900 text-white border-none">
          <CardHeader>
            <CardTitle>{props.count}</CardTitle>
            <CardDescription>Current Request/s</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex flex-col bg-gray-900 text-white border-none">
          <CardHeader>
            <CardTitle>{props.totalRs}</CardTitle>
            <CardDescription>Total Requests</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex flex-col bg-gray-900 text-white border-none">
          <CardHeader>
            <CardTitle>
              {Math.round(Number(props.totalRs) / Number(props.data.length))}
            </CardTitle>
            <CardDescription>Avg Requests/s</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex flex-col bg-gray-900 text-white border-none">
          <CardHeader>
            <CardTitle>{props.highestRs}</CardTitle>
            <CardDescription>Peak Requests/s</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
