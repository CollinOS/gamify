import React from 'react';
import Layout from '../components/Layout';
import { useRouteError } from "react-router-dom";

function ErrorPage() {

  const error = useRouteError();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-600 mx-auto pb-16">
        <h1>Error</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Layout>
  )
}

export default ErrorPage
