import React from 'react';

//Atlas Chords
import ACLanding from '../src/screenshots/ac-landing-page.png';
import ACResults from '../src/screenshots/ac-results-page.png';
import ACSubmit from '../src/screenshots/ac-submit-chord-page.png';
//World's Capitals
import WCLanding from '../src/screenshots/wc-landing-page.png';
import WCQuestion from '../src/screenshots/wc-question-page.png';
import WCResults from '../src/screenshots/wc-results-page.png';
//Cursr
import CSBless from '../src/screenshots/cs-bless-page.jpg';
import CSCurse from '../src/screenshots/cs-curse-page.jpg';
import CSDashboard from '../src/screenshots/cs-dashboard.jpg';
//Spaced Repetition
import SRDashboard from '../src/screenshots/sr-dashboard.png';
import SRTranslate from '../src/screenshots/sr-translate.png';
import SRCorrect from '../src/screenshots/sr-correct-page.png';
import SRIncorrect from '../src/screenshots/sr-incorrect-page.png';
//Bookmarks
import Bookmarks from '../src/screenshots/bookmarks.png';
import BookmarksAdd from '../src/screenshots/add-bookmarks.png';
//react icons for tech used
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact, FaLink, FaGithub } from 'react-icons/fa';
import { SiJquery, SiJavascript, SiPostgresql } from 'react-icons/si';
//react icons for live and repo links


const store = [
    {
        name: 'Cursr',
        desc: <p>The main function is to Curse, which can be done anonymously if desired. When you Curse, you can scream out your frustrations or anything desired without regard to social constraints, which can be cathartic. When you Curse, only one other person in the world will be able to see it, and they will not see who sent it. If desired, they can use the other main function of Cursr: Bless. This is where they read the Curse and stamp a unicode character to it. As a Curser, you do not need to worry about hearing any kind of judgement or anything from the Blesser; the only thing you will see is that your Curse has been read and emblazoned with a unicode character.</p>,
        images: [
            {
                imgTitle: "Dashboard",
                img: CSDashboard
            },
            {
                imgTitle: "Curse Page",
                img: CSCurse
            },
            {
                imgTitle: "Bless Page",
                img: CSBless
            },
        ],
        tech: [
            {
                techName: 'ReactJS',
                techIcon:  <FaReact />
            },
            {
                techName: 'Node.js',
                techIcon: <FaNodeJs />
            },
            {
                techName: 'JavaScript',
                techIcon: <SiJavascript />
            },
            {
                techName: 'PostgreSQL',
                techIcon: <SiPostgresql />
            },
        ],
        links: [
            {
                name: 'Live Link',
                link: <a href="https://capstone-3-oabkt.vercel.app/"><FaLink /></a>
            },
            {
                name: 'Client Repo',
                link: <a href="https://github.com/thinkful-ei-macaw/Capstone-3-OABKT---Client"><FaGithub /></a>,
            },
            {
                name: 'Server Repo',
                link: <a href="https://github.com/thinkful-ei-orka/Capstone-3-O-K-A-B-T-Server"><FaGithub /></a>,
            },
        ]
    },

    {
        name: 'Atlas Chords',
        desc: <div><p>When I first started learning guitar in 2006, I was eager to learn one guitar chord after another. I wasn't able to find an app that outright displayed guitar chords based on users' search. That's why I was motivated to create an app that makes the process of finding the basic guitar chords with ease for future guitar players.</p><p>Atlas Chords has been designed for those who are learning the basic guitar chords. These chords are a key part of mastering the basic guitar skills. Users can search and find the 14 basic guitar chords on this app. They can also submit a chord to demonstrate their skills.</p></div>,
        images: [
            {
                imgTitle: "Landing Page",
                img: ACLanding
            },
            {
                imgTitle: "Results Page",
                img: ACResults
            },
            {
                imgTitle: "Submit Chords Page",
                img: ACSubmit
            },
        ],
        tech: [
            {
                techName: 'ReactJS',
                techIcon:  <FaReact />
            },
            {
                techName: 'Node.js',
                techIcon: <FaNodeJs />
            },
            {
                techName: 'JavaScript',
                techIcon: <SiJavascript />
            },
            {
                techName: 'PostgreSQL',
                techIcon: <SiPostgresql />
            },
        ],
        links: [
            {
                name: 'Live Link',
                link: <a href="https://atlas-chords.orkunozekin.vercel.app/"><FaLink /></a>
            },
            {
                name: 'Client Repo',
                link: <a href="https://github.com/orkunozekin/Atlas-Chords-Client"><FaGithub /></a>,
            },
            {
                name: 'Server Repo',
                link: <a href="https://github.com/orkunozekin/Atlas-Chords-Node-Express"><FaGithub /></a>,
            },
        ]
    },

    {
        name: 'Spaced Repetition',
        desc: <div><p>Do you want to learn a language by putting in just 15 to 30 minutes of practice a day? Then SpeakFast is just for you. SpeakFast uses <b>Spaced Repetition algorithm</b> to help people memorize a foreign language. The app displays words in French and asks users to recall the corresponding word in English.</p><p>The words that users are able to recall more easily will be asked less frequently than those that users have more difficulties recalling, therefore enabling users to memorize each word regardless of difficulty.</p><p>This project was created by a team of three including myself, where I was responsible for writing the functionality of the app on the front end as well as design it.</p></div>,
        images: [
            {
                imgTitle: "Dashboard",
                img: SRDashboard
            },
            {
                imgTitle: "Translation Page",
                img: SRTranslate
            },
            {
                imgTitle: "Correct Page",
                img: SRCorrect
            },
            {
                imgTitle: "Incorrect Page",
                img: SRIncorrect
            },
        ],

        tech: [
            {
                techName: 'ReactJS',
                techIcon:  <FaReact />
            },
            {
                techName: 'Node.js',
                techIcon: <FaNodeJs />
            },
            {
                techName: 'JavaScript',
                techIcon: <SiJavascript />
            }
        ],
        links: [
            {
                name: 'Live Link',
                link: <a href="https://spaced-repetition-otm.vercel.app/"><FaLink /></a>
            },
            {
                name: 'Client Repo',
                link: <a href="https://github.com/thinkful-ei-orka/spaced-repetition-otm"><FaGithub /></a>,
            },
            {
                name: 'Server Repo',
                link: <a href="https://github.com/thinkful-ei-orka/spaced-repetition-api-otm"><FaGithub /></a>,
            },
        ]
    },
   
    {
        name: `World's Capitals`,
        desc: <div><p>Are you confident in your trivia knowledge for world's capitals? Play <b>World's Capitals</b> to prove your skills!</p><p>My first web application ever, <b>World's Capitals</b> take users through a series of multiple choice questions to test their knowledge of world's capitals.</p></div>,
        images: [
            {
                imgTitle: "Landing Page",
                img: WCLanding
            },
            {
                imgTitle: "Results Page",
                img: WCResults
            },
            {
                imgTitle: "Question Page",
                img: WCQuestion
            },
        ],
        tech: [
            {
                techName: 'HTML5',
                techIcon:  <AiFillHtml5 />
            },
            {
                techName: 'CSS3',
                techIcon: <FaCss3Alt />
            },
            {
                techName: 'jQuery',
                techIcon: <SiJquery />
            },
            {
                techName: 'JavaScript',
                techIcon: <SiJavascript />
            },
        ],
        links: [
            {
                name: 'Live Link',
                link: <a href="https://orkunozekin.github.io/Worlds-Capitals/"><FaLink /></a>
            },
            {
                name: 'GitHub Repo',
                link: <a href="https://github.com/orkunozekin/Worlds-Capitals"><FaGithub /></a>,
            },
        ]
    },

    {
        name: 'Bookmarks',
        desc: <div><p>I wanted to create a bookmark application that allows users to rate their bookmarks as Google Chrome does not have provide that feature.</p><p>This app allows users to save certain websites by creating bookmarks with descriptions and ratings. It also allows them to filter their bookmarks by their ratings. It's built for people who demand quick access to their favorite websites simply by filtering their bookmarks with five stars, which will conceal those rated less.</p></div>,
        images: [
            {
                imgTitle: "Bookmarks",
                img: Bookmarks
            },
            {
                imgTitle: "Add Bookmarks Form",
                img: BookmarksAdd
            },
        ],
        tech: [
            {
                techName: 'HTML5',
                techIcon:  <AiFillHtml5 />
            },
            {
                techName: 'CSS3',
                techIcon: <FaCss3Alt />
            },
            {
                techName: 'jQuery',
                techIcon: <SiJquery />
            },
            {
                techName: 'JavaScript',
                techIcon: <SiJavascript />
            },
        ],
        links: [
            {
                name: 'Live Link',
                link: <a href="https://thinkful-ei-orka.github.io/Bookmark-App-Orkun/"><FaLink /></a>
            },
            {
                name: 'GitHub Repo',
                link: <a href="https://github.com/orkunozekin/Bookmark-App"><FaGithub /></a>,
            },
        ]
    }

]

export default store;