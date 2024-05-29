import Link from "next/link";

interface PerformanceItemProps {
  performance: {
    id: string;
    composer: string;
    composition: string;
    artists: string;
    workCategory: string;
    performanceDate: string;
  };
}

export default function PerformanceItem(props: PerformanceItemProps) {
  const { performance } = props;

  return (
    <Link href={`/performances/${performance.id}`}>
      <div className="performanceCard">
        <div className="cardComposer">{performance.composer}</div>
        <div className="cardWork">{performance.composition}</div>
        <div className="cardArtists">{performance.artists}</div>
        <div className="flexRow cardFooter">
          <span>{performance.workCategory}</span>
          <span>{performance.performanceDate.slice(0, 10)}</span>
        </div>
      </div>
    </Link>
  );
}
