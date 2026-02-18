import Image from "next/image";

const PrjItem = ({ prjData }) => {
  const title = prjData.properties.name.title[0].plain_text;
  const githubUrl = prjData.properties.Github.url;
  const description = prjData.properties.Description.rich_text[0].plain_text;
  const imageSrc = prjData.cover.file?.url || prjData.cover.external.url;
  const tags = prjData.properties.tag.multi_select;
  const startDateString = prjData.properties.workPeriod.date.start;
  const endDateString = prjData.properties.workPeriod.date.end;

  const calulatedPeriod = (start, end) => {
    if (!start || !end) return 0;
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };
  return (
    <div className="project-card">
      <div className="relative w-full h-[full] min-h-[300px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          sizes="100vw"
          quality={100}
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={githubUrl}>Github 바로가기</a>
        <p className="my-1">
          작업기간: {startDateString} ~ {endDateString} (
          {calulatedPeriod(startDateString, endDateString)}일 소요)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((v) => {
            return (
              <span
                key={v.id}
                className="flex flex-col px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              >
                {v.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrjItem;
