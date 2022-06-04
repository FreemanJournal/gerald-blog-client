import React from 'react'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IPageProps from '../interfaces/page'
const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    return (
        <>
        <Navigation/>
        <Header title='gerald blog' headline='A place to share your wisdom.'/>
        </>
    )
}
export default HomePage;