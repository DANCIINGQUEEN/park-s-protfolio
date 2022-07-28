import Layout from "../components/layout";
import Head from "next/head";
import {DATABASE_ID, TOKEN} from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projectNames}) {
    // console.log(projectNames)
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">

                <Head>
                    <title>Park&apos;s Portfolio</title>
                    <meta name="description" content="fighting~~~"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>


                <h1 className="text-4xl font-bold sm:text-6xl">
                    Projects :
                    <span className="pl-4 text-blue-500">{projectNames.length}</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8 w-full">
                    {projectNames.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>

            </div>
        </Layout>
    )
}

//빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    // console.log(projects)

    const projectNames = projects.results
    //     .map((aProject) => (
    //     aProject
    // ))
    // console.log(`projectNames : ${projectNames}`)
    return {
        props: {projectNames}, // will be passed to the page component as props
    }
}