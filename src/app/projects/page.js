import { DATABASE_ID, TOKEN } from "@/config";

const Projects = async () => {
  const data = await fetch(
    `https://api.notion.com/v1/data_sources/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Notion-Version": "2025-09-03",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "이름",
            direction: "descending",
          },
        ],
      }),
      cache: "force-cache",
    }
  );

  const projectData = await data.json();

  const projects = projectData.results.map((v) => {
    return v.properties.이름.title[0].plain_text;
  });

  // console.log(projects);
  return (
    <div>
      <p>총 프로젝트: {projectData.results.length}</p>
      {projectData.results.map((v) => {
        return <h1 key={v.id}>{v.properties.이름.title[0].plain_text}</h1>;
      })}
    </div>
  );
};

export default Projects;
