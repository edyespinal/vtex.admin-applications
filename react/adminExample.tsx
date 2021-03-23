import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import helloworld from './graphql/helloworld.gql'

const AdminExample: FC = () => {
  const { data } = useQuery(helloworld)

  return (
    <Layout>
      <PageBlock 
        title="Admin Example"
        subtitle="This is a subtitle"
        variation="full"
      >
        <h1>Hello, World!</h1>
        <p>{data?.helloworld}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample