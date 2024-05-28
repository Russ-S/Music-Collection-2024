import PerformanceItem from "../components/performance-item";
import { performances } from "@/db";

export default function PerformancesPage() {
  return (
    <div>
      <h1>Performances Page</h1>

      <div>
        {performances.map((performance) => (
          <PerformanceItem performance={performance} key={performance.id} />
        ))}
      </div>
    </div>
  );
}
