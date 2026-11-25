import { describe, expect, it } from "vitest";
import { filterProjects, projects, visibleProjects } from "@/data/portfolio";

describe("Project filter counts", () => {
  it("shows 17 projects under All", () => {
    expect(filterProjects(projects, "All")).toHaveLength(17);
  });
  it("shows 7 projects under Python", () => {
    expect(filterProjects(projects, "Python")).toHaveLength(7);
  });
  it("shows 10 projects under SQL", () => {
    expect(filterProjects(projects, "SQL")).toHaveLength(10);
  });
});

describe("Default project grid", () => {
  it("shows only the first 6 projects under All before expanding", () => {
    expect(visibleProjects(projects, "All", false)).toHaveLength(6);
  });
  it("shows all 17 projects under All after expanding", () => {
    expect(visibleProjects(projects, "All", true)).toHaveLength(17);
  });
  it("shows all 7 Python projects without needing to expand", () => {
    expect(visibleProjects(projects, "Python", false)).toHaveLength(7);
  });
  it("shows all 10 SQL projects without needing to expand", () => {
    expect(visibleProjects(projects, "SQL", false)).toHaveLength(10);
  });
});
