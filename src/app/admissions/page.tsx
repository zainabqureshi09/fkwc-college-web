"use client";

const AdmissionPage = () => {
 
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Admission Process
      </h1>
      <p style={{ textAlign: "center", fontSize: "1rem", color: "#555", marginBottom: "30px" }}>
        Follow these simple steps to complete the admission process at our college.
      </p>

      {/* Admission Steps */}
      <div>
       
          <div
    
            style={{
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          
          >
            <h2 style={{ fontSize: "2rem", color: "#007bff", marginBottom: "10px" }}>
             Required Documents
            </h2>
            <br />
            <ul style={{ fontSize: "1rem", color: "#333" }}>
              
                <li>Original matriculation marksheet and two copies of the same &ldquo;9th and 10th both&ldquo;. </li><br />
                <li>Original matriculation enrollment card and 1 copy of the same.</li><br />
                <li>Original matriculation admit card and 1 copy.</li><br />
                <li>Original character certificate from the institution last attended.</li><br />
                <li>Original B-form and one copy of the same.</li><br />
                <li>Original parents CNIC and one copy each of both.</li><br />
                <li>Passport size photograph 2 copies with sky blue background and white scarf.</li><br />
             
            </ul>
          
          </div>
       
      </div>
    </div>
  );
};

export default AdmissionPage;
