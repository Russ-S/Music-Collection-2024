import { recordings } from "@/db";
import Image from "next/image";

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
    <div className="detailPage">
      <div className="backButton">
        <a className="btn" href="/recordings">
          Go Back
        </a>
      </div>

      <div className="recordingDetail">
        <div className="detailLeftSide">
          <Image
            className="detailImage"
            width={250}
            height={250}
            src={recording.coverImage}
            alt="cover image"
          />
          <p>Work Category: {recording.workCategory}</p>
          <p>File Category: {recording.fileCategory}</p>
        </div>
        <div className="details">
          <h2>{recording.composer}</h2>
          <h3>{recording.composition}</h3>
          <h4>{!!recording.artists && recording.artists}</h4>
          <h5 className="mt-2">{recording.ensemble}</h5>
          <h5>{recording.conductor}</h5>
          <p className="mediaSource">
            <span className="fw-bold">Media: </span>
            {recording.media}
            {!!recording.source.length && (
              <span className="text-sm"> (Source: {recording.source})</span>
            )}
          </p>
          <p>
            <span className="fw-bold">CD-R/Tape No.: </span>
            {recording.tapeNumber}
          </p>
          <p>
            <span className="fw-bold">Label: </span>
            <span className="detailsLabel">{recording.label}</span>{" "}
            {recording.catalogNumber}
          </p>
          <p>
            <span className="fw-bold">Cost: </span>$
            {!!recording.value.length && recording.value}
          </p>
          <p>
            <span className="fw-bold">Purchased/Recorded: </span>
            {recording.purchaseDate}
          </p>
          <p>
            <span className="fw-bold">Location: </span>
            {recording.location}
          </p>
        </div>
      </div>
    </div>
  );
}
