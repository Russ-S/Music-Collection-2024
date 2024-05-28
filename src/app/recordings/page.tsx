import RecordingItem from "../components/recording-item";
import { recordings } from "@/db";

export default function RecordingsPage() {
  return (
    <div>
      <h1>Recordings Page</h1>

      <div>
        {recordings.map((recording) => (
          <RecordingItem recording={recording} key={recording.id} />
        ))}
      </div>
    </div>
  );
}
