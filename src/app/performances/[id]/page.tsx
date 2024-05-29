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
    <div className="performanceDetailPage">
      <div className="backButton">
        <a className="btn" href="/performances">
          Go Back
        </a>
      </div>
      <div className="performanceDetail">
        <h2 className="text-center">{performance.composer}</h2>
        <h3 className="text-center">{performance.composition}</h3>
        <h4 className="text-center">
          {performance.performanceDate.slice(0, 10)}
        </h4>
        <div className="performanceDetails">
          <p className="mt-2">
            <span className="fw-bold">Artist(s): </span>
            {performance.artists}
          </p>
          <p className="mt-2">
            <span className="fw-bold">Ensemble: </span>
            {performance.ensemble}
          </p>
          <p className="mt-2">
            <span className="fw-bold">Conductor: </span>
            {performance.conductor}
          </p>
          <p className="mt-2">
            <span className="fw-bold">Concert Hall: </span>
            {performance.concertHall}
          </p>
          <p className="mt-2">
            <span className="fw-bold">City: </span>
            {performance.city}, {performance.state}
          </p>
          <p className="mt-2">
            <span className="fw-bold">Category: </span>
            {performance.workCategory}
          </p>
          <p className="mt-2">
            <span className="fw-bold">Notes: </span>
            {performance.notes}
          </p>
        </div>
      </div>
    </div>
  );
}
