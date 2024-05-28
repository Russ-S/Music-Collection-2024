import { recordings } from "@/db";

interface RecordingPageProps {
  params: {
    id: string;
  };
}

export default function RecordingPage(props: RecordingPageProps) {
  const recording = recordings.find((r) => r.id === props.params.id);

  if (!recording) {
    return <h1>Recording Not Found</h1>;
  }

  return (
    <div>
      <h2>{recording.composer}</h2>
      <h3>{recording.composition}</h3>
      <img src={recording.coverImage} alt="cover image" />
      <div>Purchased/Recorded: {recording.createdAt}</div>
    </div>
  );
}
