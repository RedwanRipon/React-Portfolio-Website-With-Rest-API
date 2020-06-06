import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsConditionPage from "../pages/TermsConditionPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/RefundPolicy" component={RefundPage}/>
                    <Route exact path="/TermsCondition" component={TermsConditionPage}/>
                    <Route exact path="/PrivacyPolicy" component={PrivacyPolicyPage}/>
                    <Route exact path="/ProjectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/CourseDetails/:CourseID" component={CourseDetailsPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;