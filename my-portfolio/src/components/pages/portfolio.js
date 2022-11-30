import React from 'react'
import Quiz from '../../assets/jsQuiz.png';
import Weather from '../../assets/weatherDashboard.png';
import Blog from '../../assets/tech-blog.png';
import Event from '../../assets/eventplaner.png';
import Nas from '../../assets/nas.png'
import Project from '../Project.js'


const project =[

     {
        id: 1,
        title :"Quiz Game",
        description : " javascript quiz game",
        img : Quiz ,
        url : "https://safazgolli.github.io/challenge-04",
        git :"https://github.com/safazgolli/challenge-04 ",
     },
     {
        id: 2,
        title :"Weather Dashboard",
        description : " Display the weather from open weather API",
        img : Weather ,
        url : "https://safazgolli.github.io/weather-dashboard/",
        git :"https://github.com/safazgolli/weather-dashboard",
     },
     {
        id: 3,
        title :"Tech Blog",
        description : " MVC Blog display posts for users ",
        img : Blog ,
        url : "https://mighty-dawn-62431.herokuapp.com",
        git :"https://github.com/safazgolli/tech-blog",
     },
     {
        id: 4,
        title :"Event planer",
        description : " Web site to plan events  ",
        img : Event ,
        url : "https://tech-event-planner.herokuapp.com/",
        git :"https://github.com/hmhtom/tech-event-planner",
     },
     {
      id: 5,
      title :"Event planer",
      description : " Web site to by event tickets  ",
      img : Nas ,
      url : "https://nas-center.herokuapp.com/",
      git :"https://github.com/hmhtom/NAS-Centre",
   },

    ];
    export  default function Portfolio(){
        return <Project project = { project}/> ;
    }