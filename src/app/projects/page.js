import { DATABASE_ID, TOKEN } from "@/config";
import PrjItem from "../components/proj/PrjItem";

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
            property: "name",
            direction: "descending",
          },
        ],
      }),
      cache: "force-cache",
    }
  );

  const projectData = await data.json();

  // const projects = projectData.results.map((v) => {
  //   return v.properties.이름.title[0].plain_text;
  // });

  // console.log(projects);
  return (
    <div className="container mx-auto">
      <p className="text-4xl font-bold sm:text-6xl text-center">
        총 프로젝트:
        <span className="pl-4 text-blue-400">{projectData.results.length}</span>
        개
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 m-6 sm:w-full gap-4">
        {projectData.results.map((v) => {
          return <PrjItem key={v.id} prjData={v} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
