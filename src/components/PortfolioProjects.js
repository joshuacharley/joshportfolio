import React from 'react';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Project from './Project'
import netflixclonehome from '../img/projects/netflix-code.png'
import netflixclonecode from '../img/projects/netflix-clonehome.png'
import safeslaoneImage from '../img/projects/safeslaoneImage.jpg'
import safesaloneDetails from '../img/projects/safesaloneDetails.jpg'
import safesaloneCode from '../img/projects/safesaloneCode.JPG'
import covid19home from '../img/projects/covid-19home.png'
import covid19code from '../img/projects/covid-19code.png'
import suggHome from '../img/projects/suggHome.png'
import suggcode from '../img/projects/sugg-code.png'
import portfolio from '../img/projects/portfolio.png'
import portfolioDetail from  '../img/projects/portfolio-detail.jpg'
import portfolioCode from '../img/projects/portfolio-code.jpg'
import limImage from '../img/projects/limImage.JPG'
import limDetails from '../img/projects/limDetails.JPG'
import postSalone from '../img/projects/postsalone.PNG'
import postsaloneDetail from '../img/projects/postsalone-detail.png'
import postsaloneCode from '../img/projects/postsaloneCode.PNG'




const PortfolioProjects = () => {
  // Show row of Project components
  return (
    <div style={{backgroundColor: 'black'}}>
      <Parallax
        className="project-bg"
        bgImage={require('../img/projects-bg.jpg')}
        bgImageAlt={'laptop'}
        strength={900}
        bgImageStyle={{width: '1080px', height: 'auto', backgroundPosition: 'center center'}}
      >
        <div id="project-section" data-aos="fade-in">
          <Container className="text-center" id="project-content">
            <h1 className="display-4" id="project-headline">Projects</h1>
            <hr className="pb-3" id="project-hr" />
            <Row>
              <Project
                image = {netflixclonecode}
                imageCode = {netflixclonehome}
                title = "Netflix Clone"
                description = "In this Netflix React Clone, user is presented with the Netflix experience. Sign up, browse, and watch your favorite shows!"
                github = "https://github.com/joshuacharley/netflix-clone"
                link = "https://joshuanetflix-clone.netlify.app/"
                modal = "This web application uses Cloud Database and User Authentication via Firebase/Firestore"
                modalTwo= "The objective for this project was to satisfy my react skills with react-router, styled-components and firebase/firestore for easy backend implementation"
              />

              <Project
                image = {safeslaoneImage}
                imageDetail = {safesaloneDetails}
                imageCode = {safesaloneCode}
                title = "Covid-19 sensitization"
                description = "Covid-19 sensitization platform uses an API to view stats in a collection provided by Johns Hopkins University. Click on an image to learn more about covid-19."
                github = "https://github.com/joshuacharley/safesalone-covid19/"
                link = "http://safesalonecovid19.sensi-sl.org/"
                modal = "This is a front end application made using Vanila Javascript and Bootstrap. On the first page, you will find the most important information on covid19 and features to interact with chatbot."
                modalTwo = "The objective for this project was to gain experience using data from an external API with an interactive front end."
              />

              <Project
                image = {covid19home}
                imageCode = {covid19code}
                title = "Covid19 Tracker"
                description = "Covid-19 Tracker is a Vue application that tracks coronavirus daily updates realtime and automatically sync your current location."
                github = "https://github.com/joshuacharley/salonecovid19"
                link = "https://salonecovid19.netlify.app/"
                modal = "salonecovid19 tracker is a vue.js application using external api to get realtime daily updates on the coronavirus. This application will automatically give you result base on your current location i.e country."
                modalTwo = "The idea for this application came from my experience using analytics tracking applications in the tech field. Objective was to gain a maximum understaing playing with api and minimal designing skills"
              />

              <Project
                image = {suggHome}
                imageCode = {suggcode}
                title = "Suggestion-Box App"
                description = "Suggestion-Box is a node.js application that allows team or employes to suggest ideas within a certain workplace"
                github = "https://github.com/joshuacharley/easysolarsuggestionapp"
                link = "https://easysolarsuggestionbox.herokuapp.com/"
                modal = "Suggestion-Box was made using Javascript, Express, MongoDB and Node.js. Users can post suggestions privately or public, signup-google, and see all suggestions including profiles."
                modalTwo = "This application was developed for a company called easysolar for a safe and easy way to get employes ideas to promote the business."
              />

              <Project
                image = {limImage}
                imageDetail = {limDetails}
                imageCode = {portfolioCode}
                title = "Limkokwing University High Flyer"
                description = "This online University High Flyer is a place that allowed students or people to read and get a better insight about the limkokwing university."
                // github = "https://github.com/josua/portfolio-version-one/"
                link = "http://limkokwinghighflyermannual.000webhostapp.com/"
                modal = "This online University High Flyer is a place that allowed students or people to read and get a better insight about the limkokwing university. It is built using Vuejs and Quasar."
                modalTwo = ""
              />

              <Project
                image = {portfolio}
                imageDetail = {portfolioDetail}
                imageCode = {portfolioCode}
                title = "Developer Portfolio"
                description = "This online portfolio is a place to display my projects and allow anyone to easily send me a message."
                github = "https://github.com/joshuacharley/Josh-resume"
                link = "https://joshuaportfolio.netlify.app/"
                modal = "This online portfolio is a place to display my projects and allow anyone to easily send me a message. It is built using React and Node.js."
                modalTwo = ""
              />

              <Project
                image = {postSalone}
                imageDetail = {postsaloneDetail}
                imageCode = {postsaloneCode}
                title = "Post Salone"
                description = "This is a replica of instagram which allows you to upload pictures, posts and commenting on posts"
                github = "https://github.com/joshuacharley/talksalone"
                link = "https://postsalone.netlify.app/"
                modal = "This is a pwa application built on react, material-ui and firebase. Tis a poweful application that allow a user to signup and sigin, create posts and upload images and can be developed more into versions."
                modalTwo = ""
              />

            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  )
}


export default PortfolioProjects;
