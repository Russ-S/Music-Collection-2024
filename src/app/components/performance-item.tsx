import Link from "next/link";

interface PerformanceItemProps {
  performance: {
    id: string;
    composer: string;
    composition: string;
    concertHall: string;
    performanceDate: string;
  };
}

export default function PerformanceItem(props: PerformanceItemProps) {
  const { performance } = props;

  return (
    <Link href={`/performances/${performance.id}`}>
      <div>{performance.composer}</div>
      <div>{performance.composition}</div>
      <div>
        {performance.concertHall} - {performance.performanceDate}
      </div>
    </Link>
  );
}
