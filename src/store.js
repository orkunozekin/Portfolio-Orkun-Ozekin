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
import CSBless from '../src/screenshots/cs-bless-page.png';
import CSCurse from '../src/screenshots/cs-curse-page.png';
import CSDashboard from '../src/screenshots/cs-dashboard.png';
//Spaced Repetition
import SRDashboard from '../src/screenshots/sf-dashboard.png';
import SRTranslate from '../src/screenshots/sf-translate.png';
//Bookmarks
import Bookmarks from '../src/screenshots/bookmarks.png';
import BookmarksAdd from '../src/screenshots/add-bookmark.png';
//react icons for tech used
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact, FaLink, FaGithub } from 'react-icons/fa';
import { SiJquery, SiJavascript, SiPostgresql } from 'react-icons/si';
//react icons for live and repo links


const store = [
    {
        name: 'Cursr',
        desc: <div><p><b>Cursr</b> is for those who just want to "vent" into the void. This app allows users to curse into a void where only one other user will see their curse and have the option to bless their curse with an emoji. The user cursing will be able to view their blessed curse.</p><p>The goal of <b>Cursr</b> is to bring some sort of relief to the cursing user by letting them know that someone out there has heard them and felt for them.</p><p>This project was a team effort and I was primarily responsible for retrieving data from our server through API calls and implementing them to the UI along with the app's functionality on the client-side.</p></div>,
        images: [
            {
                imgTitle: "Dashboard",
                img: CSDashboard
            },
            {
                imgTitle: "Curse Page",
                img: CSCurse
            },
        ],
        tech: [
            {
                techName: 'ReactJS',
                techIcon: <FaReact />
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
                name: "Live Link",
                url: "https://capstone-3-oabkt.vercel.app/",
                icon: <FaLink className="link-icon" />
            },
            {
                name: "Client Repo",
                url: "https://github.com/thinkful-ei-macaw/Capstone-3-OABKT---Client",
                icon: <FaGithub className="link-icon" />
            },
            {
                name: "Server Repo",
                url: "https://github.com/thinkful-ei-orka/Capstone-3-O-K-A-B-T-Server",
                icon: <FaGithub className="link-icon" />
            },
        ]
    },

    {
        name: 'Atlas Chords',
        desc: <div><p>When I first started learning guitar in 2006, I was eager to learn one guitar chord after another. I wasn't able to find an app that outright displayed guitar chords based on users' search. That's why I was motivated to create an app that makes the process of finding the basic guitar chords with ease for future guitar players.</p><p>Atlas Chords has been designed for those who are learning the basic guitar chords. These chords are a key part of mastering basic guitar skills. Users can search and find the 14 basic guitar chords on this app. They can also submit a chord to demonstrate their skills.</p></div>,
        images: [
            {
                imgTitle: "Landing Page",
                img: ACLanding
            },
            {
                imgTitle: "Results Page",
                img: ACResults
            },
        ],
        tech: [
            {
                techName: 'ReactJS',
                techIcon: <FaReact />
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
                name: "Live Link",
                url: "https://atlas-chords.orkunozekin.vercel.app/",
                icon: <FaLink className="link-icon" />
            },
            {
                name: "Client Repo",
                url: "https://github.com/orkunozekin/Atlas-Chords-Client",
                icon: <FaGithub className="link-icon" />
                
            },
            {
                name: "Server Repo",
                url: "https://github.com/orkunozekin/Atlas-Chords-Node-Express",
                icon: <FaGithub className="link-icon" />
            },
        ]
    },

    {
        name: 'Spaced Repetition',
        desc: <div><p>Do you want to learn a language by putting in just 15 to 30 minutes of practice a day? Then SpeakFast is just for you. SpeakFast uses the <b>Spaced Repetition algorithm</b> to help people memorize a foreign language. The app displays words in French and asks users to recall the corresponding word in English.</p><p>The words that users can recall more easily will be asked less frequently than those that users have more difficulties recalling, therefore enabling users to memorize each word regardless of difficulty.</p><p>This project was created by a team of three including myself, where I was responsible for writing the functionality of the app on the front end as well as design it.</p></div>,
        images: [
            {
                imgTitle: "Dashboard",
                img: SRDashboard
            },
            {
                imgTitle: "Translation Page",
                img: SRTranslate
            },
        ],

        tech: [
            {
                techName: 'ReactJS',
                techIcon: <FaReact />
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
                name: "Live Link",
                url: "https://spaced-repetition-otm.vercel.app/",
                icon: <FaLink className="link-icon" />
            },
            {
                name: "Client Repo",
                url: "https://github.com/thinkful-ei-orka/spaced-repetition-otm",
                icon: <FaGithub className="link-icon" />,
            },
            {
                name: "Server Repo",
                url: "https://github.com/thinkful-ei-orka/spaced-repetition-api-otm",
                icon: <FaGithub className="link-icon" />,
            },
        ]
    },

    {
        name: `World's Capitals`,
        desc: <div><p>Are you confident in your trivia knowledge for the world's capitals? Play <b>World's Capitals</b> to prove your skills!</p><p>My first web application ever, <b>World's Capitals</b> take users through a series of multiple-choice questions to test their knowledge of the world's capitals.</p></div>,
        images: [
            {
                imgTitle: "Landing Page",
                img: WCLanding
            },
            {
                imgTitle: "Question Page",
                img: WCQuestion
            },
        ],
        tech: [
            {
                techName: 'HTML5',
                techIcon: <AiFillHtml5 />
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
                name: "Live Link",
                url: "https://orkunozekin.github.io/Worlds-Capitals/",
                icon: <FaLink className="link-icon" />
            },
            {
                name: "GitHub Repo",
                url: "https://github.com/orkunozekin/Worlds-Capitals",
                icon: <FaGithub className="link-icon" />
            },
        ]
    },

    {
        name: 'Bookmarks',
        desc: <div><p>I wanted to create a bookmark application that allows users to rate their bookmarks as Google Chrome does not offer that feature.</p><p>This app allows users to save certain websites by creating bookmarks with descriptions and ratings. It also allows them to filter their bookmarks by their ratings. It's built for people who demand quick access to their favorite websites simply by filtering their bookmarks with five stars, which will conceal those rated less.</p></div>,
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
                techIcon: <AiFillHtml5 />
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
                name: "Live Link",
                url: "https://thinkful-ei-orka.github.io/Bookmark-App-Orkun/",
                icon: <FaLink className="link-icon" />
            },
            {
                name: "GitHub Repo",
                url: "https://github.com/orkunozekin/Bookmark-App",
                icon: <FaGithub className="link-icon" />
            },
        ]
    }

]

export default store;