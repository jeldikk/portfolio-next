export function createProjectsUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000/api/projects";
  } else {
    return "/api/projects";
  }
}
