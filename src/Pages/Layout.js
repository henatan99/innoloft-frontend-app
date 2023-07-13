import React, {useEffect} from "react";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import MainNavBar from "../components/MainNavBar";
import MainCompNav from "../components/MainCompNav";
import { mainNavBarList } from "../helpers/constants";
import { connect } from "react-redux";
import { fetchConfiguration } from "../redux/actions/configuration";

const Layout = ({children, edit, configuration, loading, error, getConfiguration}) => {
    
    const id = process.env.REACT_APP_ID || 1;
    useEffect(() => {
        getConfiguration(id);
    }, [getConfiguration, id])
    
    return (
        <div className="App  bg-custom-light-gray">
            <Header logo={configuration && configuration.logo} mainColor={configuration && configuration.mainColor}/>
            <main className='flex flex-row px-[2%] max-w-[1200px] mx-auto'>
                <div className='hidden md:block'>
                <LeftNav />
                </div>
                <div className='flex flex-col flex-grow'>
                    <div className='my-1'>
                    <MainNavBar 
                        leftComp={edit ? 'Offer Title' : <MainCompNav list={mainNavBarList}/>} 
                        edit={edit} 
                    />
                    </div>
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, { configuration: configuration });
                    })}
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        configuration: state.configuration.configuration,
        loading: state.loading,
        error: state.error
    }
) 

const mapDispatchToProps = (dispatch) => ({
    getConfiguration: (id) => dispatch(fetchConfiguration(`${id}/`)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Layout);