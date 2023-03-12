import { useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { IProject } from "../models/project.model";
import { createProjectsUrl } from "../urls/urls";

export const getStaticProps: GetStaticProps<{
  projects: IProject[];
}> = async () => {
  const fetchUrl = createProjectsUrl();
  console.log({ fetchUrl });
  const response = await fetch(createProjectsUrl());
  const projects = await response.json();
  return {
    props: {
      projects,
    },
  };
};

function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    console.log({ projects });
  }, []);
  return (
    <>
      <Head>
        <title>Project - jeldikk :: J Kamal Kumar</title>
      </Head>
    </>
  );
}

export default ProjectsPage;
