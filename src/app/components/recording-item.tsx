import Link from "next/link";

interface RecordingItemProps {
  recording: {
    id: string;
    composer: string;
    composition: string;
    coverImage: string;
    createdAt: string;
  };
}

export default function RecordingItem(props: RecordingItemProps) {
  const { recording } = props;

  return (
    <Link href={`/recordings/${recording.id}`}>
      <img
        src={recording.coverImage}
        alt="cover image"
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid #000",
        }}
      />
      <div>{recording.composer}</div>
      <div>{recording.composition}</div>
    </Link>
  );
}
