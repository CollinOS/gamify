import React from 'react';
import Layout from '../components/Layout';

export default function Root() {

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-purple-800 mx-auto pb-16">
        <h1>hello</h1>
        <div className="h-16 w-16 bg-emerald-500"></div>
        <div className="h-16 w-16 bg-red-500"></div>
        <div className="h-16 w-16 bg-amber-400"></div>
      </div>
    </Layout>
  )
}
