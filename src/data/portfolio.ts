export type ProjectTag = "Python" | "SQL";

export interface Project {
  title: string;
  summary: string;
  tag: ProjectTag;
}

export const projects: Project[] = [
  { tag: "Python", title: "Exploring NYC Public School Test Result Scores", summary: "Identified top-performing math schools and compared combined SAT performance across NYC boroughs." },
  { tag: "Python", title: "Hypothesis Testing with Men's and Women's Soccer Matches", summary: "Conducted statistical hypothesis testing on mean goal differentials across international matches." },
  { tag: "Python", title: "Customer Analytics: Preparing Data for Modeling", summary: "Optimized DataFrame memory schemas, data types, and filtering pipelines for predictive modeling." },
  { tag: "Python", title: "Analyzing Crime in Los Angeles", summary: "Examined hourly crime frequency, peak night-crime zones, and victim age distributions." },
  { tag: "Python", title: "Exploring Airbnb Market Trends", summary: "Analyzed NYC private-room pricing, listing availability, and review timelines." },
  { tag: "Python", title: "Visualizing the History of Nobel Prize Winners", summary: "Mapped laureate distributions across decades, categories, countries, and gender." },
  { tag: "Python", title: "Investigating Netflix Movies", summary: "Analyzed 1990s film runtime trends and action-genre duration distributions." },
  { tag: "SQL", title: "Evaluating a Manufacturing Process Impact", summary: "Applied SQL window functions and rolling control limits to detect out-of-spec product heights." },
  { tag: "SQL", title: "Analyzing Motorcycle Part Sales", summary: "Aggregated monthly warehouse-level net revenue across product lines." },
  { tag: "SQL", title: "Analyzing Unicorn Companies", summary: "Ranked high-growth industries (2019–2021) by new unicorn counts and average valuations." },
  { tag: "SQL", title: "Analyzing Students' Mental Health", summary: "Evaluated correlations between international student length of stay and PHQ-9/SCS/ASISS diagnostic scores." },
  { tag: "SQL", title: "Analyzing Industry Carbon Emissions", summary: "Summarized corporate carbon footprints and unique entity counts by industry group." },
  { tag: "SQL", title: "Analyzing International Debt Statistics", summary: "Queried sovereign debt totals, country counts, and minimum principal repayment benchmarks." },
  { tag: "SQL", title: "Analysis of GoodThought NGO Initiatives", summary: "Evaluated donation distributions by donor category and regional project impact." },
  { tag: "SQL", title: "Analyzing Electric Vehicle Charging Habits", summary: "Profiled garage utilization, peak charging start windows, and extended sessions." },
  { tag: "SQL", title: "Exploring Trends in American Baby Names", summary: "Classified multi-decade naming frequency into classic vs. trendy cohorts." },
  { tag: "SQL", title: "When Was the Golden Era of Video Games?", summary: "Joined critic/user review scores with global sales tables to identify peak release years." },
];

export type ProjectFilter = "All" | ProjectTag;
export const projectFilters: ProjectFilter[] = ["All", "Python", "SQL"];

export function filterProjects(list: Project[], filter: ProjectFilter): Project[] {
  return filter === "All" ? list : list.filter((p) => p.tag === filter);
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  details?: string;
}

export const publications: Publication[] = [
  {
    title:
      "An Analysis of Alignment Between Secondary School Mathematics Standards and the Assessments 2013 and 2014 of the Board of Intermediate and Secondary Education Lahore, Punjab, Pakistan",
    venue: "Bulletin of Education and Research",
    year: "2019",
    details: "41(2)",
  },
  {
    title: "Challenges to Maintaining Alignment Between Secondary Level Mathematics Curriculum and Assessments in Pakistan",
    venue: "Journal of Research and Reflections in Education",
    year: "2019",
    details: "13(2)",
  },
  {
    title: "Examining Grades as Valid Measures of Secondary School Students' Competence in Mathematics",
    venue: "Doctoral Thesis (University of the Punjab)",
    year: "2019",
  },
  {
    title:
      "Appraising Adequacy of Standard Based Curriculum 2006 and Allied Secondary School Mathematics Textbooks for Higher Order Thinking Skills (HOTS) in the Punjab, Pakistan",
    venue: "Pakistan Journal of Education",
    year: "2018",
    details: "35(3)",
  },
];

export const degrees = [
  { title: "PhD in Science Education", org: "University of the Punjab" },
  { title: "M.Phil in Teacher Education", org: "Allama Iqbal Open University, Islamabad" },
  { title: "M.Sc. in Computer Science", org: "PUCIT, University of the Punjab" },
];

export const roles = [
  { title: "Senior Teacher (BPS-18), Computer Science", org: "National Special Education Complex (NSEC), Lahore", period: "2007 – Present" },
  { title: "Consultant System Analyst & HOD (SEF)", org: "Dar-e-Arqam Foundation" },
  { title: "Tutor & Workshop Resource Person", org: "Allama Iqbal Open University", period: "Since 2008" },
  { title: "Assistant Director Academics", org: "Dar-e-Arqam Foundation", period: "2005 – 2007" },
  { title: "Deputy Chief Secrecy Officer", org: "Punjab Board of Technical Education", period: "2005" },
  { title: "Subject Specialist (Computer Science Textbooks, Classes 1–8)", org: "AFAQ, Lahore", period: "2005 – 2007" },
];

export const skillGroups = [
  { label: "Languages & Libraries", items: ["Python", "SQL (PostgreSQL)", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { label: "BI & Databases", items: ["Power BI", "Databricks", "PostgreSQL", "SQL Server"] },
  { label: "AI & Research", items: ["OpenAI API", "LangChain", "Hugging Face", "Vector Databases", "Experimental Design", "Educational Assessment"] },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  email: "khurram.ier@gmail.com",
  phone: "+92 334 4010403",
  location: "Johar Town, Lahore, Pakistan",
};
