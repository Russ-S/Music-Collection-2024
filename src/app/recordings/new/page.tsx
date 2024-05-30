import dbClient from "@/db/mongodb";

export default function createRecordingPage() {
  // const createRecording = async (formdata: formData) => {
  //   "use server"

  //   const composer = formData.get("composer") as string
  // }

  return (
    <div className="pageBackground">
      <form action="">
        <div className="recordingForm">
          <h2 className="text-center fw-bold mb-2">Create New Recording</h2>

          <div className="newRecordingForm mt-3">
            <div className="row mb-3">
              <div className="col-lg-9 col-md-8">
                <label htmlFor="composer">Composer:</label>
                <input
                  type="text"
                  name="composer"
                  id="composer"
                  className="form-control"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <label htmlFor="coverImage">Cover Image:</label>
                <input
                  type="text"
                  name="coverImage"
                  id="coverImage"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="composition">Composition:</label>
                <input
                  type="text"
                  name="composition"
                  id="composition"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="artists">Artist(s):</label>
                <input
                  type="text"
                  name="artists"
                  id="artists"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="conductor">Conductor:</label>
                <input
                  type="text"
                  name="conductor"
                  id="conductor"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="ensemble">Ensemble:</label>
                <input
                  type="text"
                  name="ensemble"
                  id="ensemble"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="media">Media:</label>
                <input
                  type="text"
                  name="media"
                  id="media"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="digital">SPARS Code:</label>
                <input
                  type="text"
                  name="digital"
                  id="digital"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="source">Source:</label>
                <input
                  type="text"
                  name="source"
                  id="source"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="tapeNumber">CD-R/Tape #:</label>
                <input
                  type="text"
                  name="tapeNumber"
                  id="tapeNumber"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="label">Label:</label>
                <input
                  type="text"
                  name="label"
                  id="label"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="catalogNumber">Catalog # :</label>
                <input
                  type="text"
                  name="catalogNumber"
                  id="catalogNumber"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="offset-xl-1 col-xl-2 col-lg-4 col-sm-6">
                <label htmlForcol-xl-2 col-lg-4 col-sm-6="workCategory">
                  Work Cat.:
                </label>
                <input
                  type="text"
                  name="workCategory"
                  id="workCategory"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="fileCategory">File Cat.:</label>
                <input
                  type="text"
                  name="fileCategory"
                  id="fileCategory"
                  className="form-control"
                />
              </div>

              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="purchaseDate">Purch./Rec.:</label>
                <input
                  type="text"
                  name="purchaseDate"
                  id="purchaseDate"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="value">Value (0.00):</label>
                <input
                  type="text"
                  name="value"
                  id="value"
                  className="form-control"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="form-control"
                />
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-around">
              <button className="btn btn-success fw-semibold">
                Add Recording
              </button>
              <button type="reset" className="btn btn-warning fw-semibold">
                Clear Form
              </button>
              <button className="btn btn-danger fw-semibold">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
