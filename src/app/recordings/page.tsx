import RecordingItem from "../components/recording-item";
import { recordings } from "@/db";

export default function RecordingsPage() {
  return (
    <div className="allRecordings">
      <h1 className="pageTitle">Recordings</h1>

      <div className="recordingsPage">
        {recordings.map((recording) => (
          <RecordingItem recording={recording} key={recording.id} />
        ))}
      </div>
    </div>
  );
}
