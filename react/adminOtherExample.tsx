import React, { FC } from 'react'
import { Layout, PageBlock } from "vtex.styleguide";

const AdminOtherExample: FC = () => {
    return (
        <Layout>
            <PageBlock
                title="Admin Other Example Component"
                subtitle="This is another subtitle for another component"
                varitation="full"
            >
                <h1>Another Example</h1>
            </PageBlock>
        </Layout>
    )
}

export default AdminOtherExample
