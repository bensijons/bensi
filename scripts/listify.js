const mapProjects = (str) => {
  const result = {};
  result.project = str?.split(',').map((project) => project?.trim()) || [];
  result.include = result.project.map((project) => ({
    project,
    key: project.toUpperCase().replaceAll('-', '_'),
  }));
  return result;
};
const list = mapProjects(process.argv[2]);
process.stdout.write(JSON.stringify(list));
