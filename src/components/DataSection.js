import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import RightAddressInfo from './RightAddressInfo';
import VideoSection from './videoSection';
import { fetchProduct, editProduct } from "../redux/actions/product";
import { fetchTRL } from "../redux/actions/trl";
import ProductDetails from "./Details";
import Product from "./Product";

const DataSection = ({ product, loading, error, getProduct, edit, trls, getTrl, editProduct, configuration }) => {
    const id = '6781/';

    useEffect(() => {
      getProduct(id);
      getTrl();
    }, [getProduct, id])

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!product) {
      return null;
    }

    console.log('parTRL', trls)
    return (
        <>
          <div className='flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden'>
            <Product edit={edit} product={product} editProduct={editProduct}/>
            <div>
              {
                configuration && configuration.hasUserSection && 
                <RightAddressInfo 
                  logo={product.company.logo} 
                  profilePicture={product.user.profilePicture} 
                  firstName={product.user.firstName} 
                  lastName={product.user.lastName} 
                  companyName={product.company.name} 
                  lat={product.company.address.latitude} 
                  lng={product.company.address.longitude}
                  street={product.company.address.street}
                  city={product.company.address.city.name}
                  country={product.company.address.country.name}
                />
              }
            </div>
          </div>
          <div className='my-3 bg-white rounded-lg p-4'>
            <VideoSection edit={edit} videoUrl={product.video}/>
          </div>
          <div className='my-3 bg-white rounded-lg p-4'>
            <ProductDetails
              product={product}
              trls={trls}
              edit={edit} 
              editProduct={editProduct}
            />
          </div>
        </>
    )
}

const mapStateToProps = (state) => (
  {
    product: state.product.product,
    trls: state.trlList.trl,
    loading: state.loading,
    error: state.error
  }
) 

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(fetchProduct(id)),
  getTrl: () => dispatch(fetchTRL()),
  editProduct: (id, product) => dispatch(editProduct(id, product))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataSection)