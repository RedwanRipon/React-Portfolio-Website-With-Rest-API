import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsCondition from "../components/TermsCondition/TermsCondition";

class TermsConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms and Condition" />
                <PageTop pagetitle="Terms and Condition"/>
                <TermsCondition/>
                <Footer/>

            </Fragment>
        );
    }
}

export default TermsConditionPage;