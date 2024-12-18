"use client";

const SubjectPage = () => {
  // Static data for grouped subjects with group descriptions
  const subjectGroups = [
    {
      group: "Pre Engineering",
      description: "Focuses on core subjects required for engineering fields, emphasizing mathematics and science.",
      subjects: ["Physics", "Chemistry", "Urdu", "Islamiyat / Pak Studies", "English", "Mathematics"],
    },
    {
      group: "Computer Science",
      description: "Designed for students interested in programming, technology, and computer applications.",
      subjects: ["Mathematics", "Physics", "Islamiyat / Pak Studies", "English", "Computer Science", "Urdu"],
    },
    {
      group: "Pre Medical",
      description: "Prepares students for careers in medical and biological sciences with subjects like biology and chemistry.",
      subjects: ["English", "Islamiyat / Pak Studies", "Urdu", "Biology", "Chemistry", "Physics"],
    },
    {
      group: "Commerce",
      description: "Focuses on trade, accounting, economics, and business-related subjects for future commerce professionals.",
      subjects: [
        "English",
        "Islamiyat / Pak Studies",
        "Urdu",
        "Principles of Commerce - I / Banking (XII)",
        "Principles of Economics - I / Commercial Geography (XII)",
        "Business Maths / Statistics(XII)",
        "Principles of accounting (I) / Principles of accounting (II)",
      ],
    },
    {
      group: "Humanities",
      description: "A diverse group for students interested in arts, social sciences, and education.",
      subjects: ["English", "Islamiyat / Pak Studies", "Urdu", "Education", "Islamic Studies", "Civics"],
    },
  ];

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Subjects by Groups
      </h1>

      <div>
        {subjectGroups.map((group, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Group Title */}
            <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginBottom: "10px" }}>
              {group.group}
            </h2>

            {/* Group Description */}
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}>
              {group.description}
            </p>

            {/* Subjects List */}
            <ul style={{ listStyle: "none", padding: "0" }}>
              {group.subjects.map((subject, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "1.1rem",
                    color: "#333",
                    padding: "8px 0",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;
