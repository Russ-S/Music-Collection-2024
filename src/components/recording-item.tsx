import Link from "next/link";
import Image from "next/image";

interface RecordingItemProps {
  recording: {
    id: string;
    composer: string;
    composition: string;
    artists: string;
    coverImage: string;
    ensemble: string;
    conductor: string;
    media: string;
    label: string;
    catalogNumber: string;
    workCategory: string;
    value: string;
    tapeNumber: string;
  };
}

export default function RecordingItem(props: RecordingItemProps) {
  const { recording } = props;

  return (
    <Link href={`/recordings/${recording.id}`}>
      <div className="recordingCard">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Image
            width={75}
            height={75}
            src={recording.coverImage}
            alt="cover image"
            style={{
              border: "1px solid #000",
            }}
          />
        </div>
        <div className="cardComposer">{recording.composer}</div>
        <div className="cardWork">{recording.composition}</div>
        <div className="cardArtists">{recording.artists}</div>
        <div className="flexRow cardFooter">
          <span>{recording.media}</span>
          <span>{recording.workCategory}</span>
        </div>
      </div>
    </Link>
  );
}
