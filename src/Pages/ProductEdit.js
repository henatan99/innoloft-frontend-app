import React from "react";
import Layout from "./Layout";
import DataSection from "../components/DataSection";

const ProductEdit = () => {
    return (
        <Layout edit={true}>
            <DataSection edit={true} />
        </Layout>
    )
}

export default ProductEdit;