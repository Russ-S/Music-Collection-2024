import PerformanceItem from "../../components/performance-item";
import { performances } from "@/db";

export default function PerformancesPage() {
  return (
    <div className="pageBackground">
      <h1 className="pageTitle">Performances</h1>

      <div className="performancesPage">
        {performances.map((performance) => (
          <PerformanceItem performance={performance} key={performance.id} />
        ))}
      </div>
    </div>
  );
}
