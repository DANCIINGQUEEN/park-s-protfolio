import Image from "next/image"


export default function ProjectItem({data}) {
    const title = data.properties.Name.title[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tag.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-')
        const endDateStringArray = end.split('-')

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2])
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2])

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate)
        const result = diffInMs / (1000 * 60 * 60 * 24)

        // console.log(`period : ${result}`)
        return result

    }

    // console.log(data)
    return (
        <div className="project-card">
            <Image src={imgSrc}
                   className="rounded-t-xl"
                   width="100%"
                   height="60%"
                   layout="responsive"
                   objectFit="cover"
                   quality="100"
                   alt="cover image"
            />
            <div className="p-4 flex flex-col ">

                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>
                    Github
                </a>
                <a href={youtube}>
                    Youtube
                </a>
                <p className="my-1">Period : {start} ~ {end} ({calculatedPeriod(start, end)} Days)</p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 key={aTag.id}
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30">{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}