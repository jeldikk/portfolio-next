import { useEffect } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { IProject } from "../models/project.model";
import { createProjectsUrl } from "../urls/urls";

export const getServerSideProps: GetServerSideProps<{
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
