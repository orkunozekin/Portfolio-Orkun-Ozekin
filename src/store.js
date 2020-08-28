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
import CSSignUp from '../src/screenshots/cs-sign-up.png';
//Spaced Repetition
import SRDashboard from '../src/screenshots/sr-dashboard.png';
import SRTranslate from '../src/screenshots/sr-translate.png';
import SRCorrect from '../src/screenshots/sr-correct-page.png';
import SRIncorrect from '../src/screenshots/sr-incorrect-page.png';
//Bookmarks
import Bookmarks from '../src/screenshots/bookmarks.jpg';
import BookmarksAdd from '../src/screenshots/add-bookmark-form.jpg';

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
        tech: 'Use the Icons for tech'
    },

    {
        name: 'Atlas Chords',
        desc: '',
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
        tech: 'Use the Icons for tech',
    },

    {
        name: 'Spaced Repetition',
        desc: <div><p>Do you want to learn a language by putting in just 15 to 30 minutes of practice a day? Then SpeakFast is just for you. SpeakFast uses <b>Spaced Repetition algorithm</b> to help people memorize a foreign language. The app displays words in French and asks users to recall the corresponding word in English.</p><p>The words that users are able to recall more easily will be asked less frequently than those that users have more difficulties recalling, therefore enabling users to memorize each word regardless of difficulty.</p><p>This project was created by a team of three including myself, where my responsibility was to write functionality of the app on the front end as well as design it.</p></div>,
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
        tech: 'Use the Icons for tech'
    },
   
    {
        name: `World's Capitals`,
        desc: <p></p>,
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
        tech: 'Use the Icons for tech'
    },

    {
        name: 'Bookmarks',
        desc: '',
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
        tech: 'Use the Icons for tech'
    }

]

export default store;