import React from 'react';
import HomeHero from "../components/HomeHero";
import HomeQuests from "../components/HomeQuests";
import HomeSkills from "../components/HomeSkills";
import HomeTimeline from "../components/HomeTimeline";
import Layout from '../components/Layout';

export default function Root() {

  return (
    <Layout>
      <HomeHero />
      <HomeSkills />
      <HomeTimeline />
      <HomeQuests />
    </Layout>
  )
}
