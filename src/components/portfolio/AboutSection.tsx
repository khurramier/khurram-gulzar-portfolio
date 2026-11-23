export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h1 id="about-heading" className="mb-4 mt-8 text-4xl font-extrabold tracking-tight text-foreground">
        About me
      </h1>
      <p className="prose-measure text-lg leading-relaxed text-body">
        PhD-qualified education and research professional bridging academic leadership, curriculum assessment, and data
        analytics.
      </p>

      <div className="prose-measure mt-4 flex flex-col gap-3.5">
        <p>
          I am a <strong className="font-semibold text-foreground">Senior Teacher (BPS-18) in Computer Science</strong> at
          the National Special Education Complex (NSEC), Johar Town, Lahore, where I have served since June 2007. My
          career spans academic leadership, curriculum and textbook development, examination administration, and teacher
          education—including roles as{" "}
          <strong className="font-semibold text-foreground">
            Consultant System Analyst and HOD (Secondary Education Forum)
          </strong>{" "}
          at Dar-e-Arqam Foundation and <strong className="font-semibold text-foreground">Tutor / Resource Person</strong>{" "}
          for Allama Iqbal Open University (AIOU).
        </p>
        <p>
          I hold a <strong className="font-semibold text-foreground">PhD in Science Education</strong> and an{" "}
          <strong className="font-semibold text-foreground">M.Sc. in Computer Science</strong> from the University of the
          Punjab, alongside an <strong className="font-semibold text-foreground">M.Phil in Teacher Education</strong> from
          AIOU. My doctoral and peer-reviewed research focuses on{" "}
          <strong className="font-semibold text-foreground">curriculum-assessment alignment</strong>,{" "}
          <strong className="font-semibold text-foreground">higher-order thinking skills (HOTS)</strong>, and validity in
          secondary school mathematics examinations.
        </p>
        <p>
          Alongside my work in education, I am a{" "}
          <strong className="font-semibold text-foreground">DataCamp Certified Associate Data Analyst (2025)</strong> with{" "}
          <strong className="font-semibold text-foreground">297 hours of hands-on training</strong> across Python, SQL, R,
          Power BI, Databricks, and AI engineering workflows. My current technical practice focuses on exploratory data
          analysis, statistical hypothesis testing, AI-assisted educational workflows, and Urdu-language evaluation.
        </p>
      </div>

      <div className="prose-measure mt-7 rounded-sm border-l-[3px] border-primary bg-secondary px-5 py-4 text-[14.5px]">
        <strong className="font-semibold text-foreground">DataCamp Associate Data Analyst Certified (2025)</strong> ·
        Completed 297 hours of structured training across SQL (39h), Python (36h), Power BI (50h), R (36h), Databricks
        (28h), and AI Engineering for Developers (26h).
      </div>
    </section>
  );
}
