import React from 'react';
import HomeHero from "../components/HomeHero";
import HomeSkills from "../components/HomeSkills";
import Layout from '../components/Layout';

export default function Root() {

  return (
    <Layout>
      <HomeHero />
      <HomeSkills />
    </Layout>
  )
}
