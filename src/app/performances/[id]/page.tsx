import { performances } from "@/db";

interface PerformancePageProps {
  params: {
    id: string;
  };
}

export default function PerformancePage(props: PerformancePageProps) {
  const performance = performances.find((p) => p.id === props.params.id);

  if (!performance) {
    return <h1>Performance Not Found</h1>;
  }

  return (
    <div>
      <h2>{performance.composer}</h2>
      <h3>{performance.composition}</h3>
      <h4>
        {performance.concertHall} - {performance.performanceDate}
      </h4>
    </div>
  );
}
