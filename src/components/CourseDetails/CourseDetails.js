import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/ReactClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class CourseDetails extends Component {

    constructor(props) {
        super(props);
        this.state ={
            MyCourseID: props.id,
            LongTitle:"",
            TotalLecture:"",
            TotalStudent:"",
            ShortDes:"",
            LongDes:"",
            VideoUrl:"",
            MoreInfoUrl:"",
            SkillAll:"",
            loading:true,
            error:false
        }
    }
    componentDidMount() {

        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseID).then(result=>{
            if (result==null){
                this.setState({error:true, loading: false})
            }
            else {
                this.setState({
                    LongTitle: result[0]['long_title'],
                    TotalLecture: result[0]['total_lecture'],
                    TotalStudent: result[0]['total_student'],
                    ShortDes: result[0]['short_des'],
                    LongDes: result[0]['long_des'],
                    VideoUrl: result[0]['video_url'],
                    MoreInfoUrl: result[0]['courses_link'],
                    SkillAll: result[0]['skill_all'],
                    loading: false
                });
            }

        }).catch(error=>{
            this.setState({error:true, loading: false})
        })
    }
    render() {
        if (this.state.loading==true && this.state.error==false ){
            return <Loading/>
        }
        else if (this.state.loading==false && this.state.error==false){

            return (
                <Fragment>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPagerOverlay">
                            <Container className="topPageContentCourse">
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <h3 className="courseFullTitle">{this.state.LongTitle}</h3>
                                        <h5 className="courseSubTitle">Total Lecture={this.state.TotalLecture}</h5>
                                        <h5 className="courseSubTitle mt-0">Total Student={this.state.TotalStudent}</h5>

                                    </Col>


                                    <Col sm={12} md={6} lg={6}>
                                        <p className="courseDes">{this.state.LongDes}</p>

                                    </Col>

                                </Row>

                            </Container>

                        </div>
                    </Container>

                    <Container className="mt-5">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h1 className="serviceName">Skill You Get</h1>
                                {ReactHtmlParser(this.state.SkillAll)}
                                <Button target="_blank" href={"//" + this.state.MoreInfoUrl} variant="primary">Buy
                                    Now</Button>

                            </Col>

                            <Col sm={12} md={6} lg={6}>
                                <Player>
                                    <source src={this.state.VideoUrl}/>
                                    <BigPlayButton position="center"/>
                                </Player>

                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            );
        }
        else if (this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default CourseDetails;