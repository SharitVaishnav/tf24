import { images } from "./EventImages/Images"; 

const data = [
    {
        name: "DOTSLASH",
        description: "Comepetetive Programming Club of IIIT Nagpur",
        image: "/3.jpg",
        events: [
            {
                image: images[0],
                name: "QUANT QUEST",
                description:
                    "Quant Quest is an algorithmic trading competition hosted by IIIT Nagpur. Participants, either solo or in teams of up to three, design trading strategies to maximize Gross ROI. The strategies are tested in a simulated market environment reflecting real-world scenarios, with a focus on Indian or US markets.",
                prize: "20000",
                date: "24 October,2024",
                link: "https://unstop.com/p/quant-quest-tantrafiesta24-iiit-nagpur-1153126",
                
            },
            {
                image: images[1],
                name: "Algorithimia",
                description:
                    "Algorithmia is an ICPC-style competitive programming contest by IIIT Nagpur, featuring two rounds: an online round on Codeforces, and an offline round at IIITN campus. Teams of 1-3 solve 6-10 problems across varying difficulty levels.",
                prize: "30000",
                date: "24 October,2024",
                link: "https://unstop.com/p/algorithmia-tantrafiesta24-iiit-nagpur-1152434",
            }
        ],
    },
    {
        name: "CRISPR",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Analytica",
                description:
                "Analytica is a machine learning and data science hackathon, with Round 1 on Unstop and Round 2 offline on Kaggle. It encourages creative problem-solving using data science and machine learning techniques.",
                prize: "20000",
                date: "24 October,2024",
                link: "https://unstop.com/p/analytica-tantrafiesta24-iiit-nagpur-1151638",
                
            },
            {
                image: "/test.png",
                name: "GPT 4o mini Solve-A-Thon",
                description:
                    "Gen-AI Hackathon is an online and offline event where participants create innovative solutions to problem statements, focusing on code functionality, efficiency, creativity, and AI model use (e.g., GPT-4).",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/gpt-4o-solve-a-thon-tantrafiesta24-iiit-nagpur-1153065",
            }
        ],
    },
    {
        name: "IOTICS",
        description: "Internet of Things and Robotics Club of IIIT Nagpur",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Robo Rumble",
                description:
                    "The Robo Rumble event challenges teams from different colleges to design and build their own RC cars according to our specifications. The event is designed to test the participant’s engineering skills, creativity, and strategy through a series of competitive rounds.",
                prize: "35000",
                date: "24 October,2024",
                link: "https://unstop.com/p/robo-rumble-tantrafiesta24-iiit-nagpur-1152270",
                
            },
            {
                image: "/test.png",
                name: "Trail Tracer: Line Following Bot",
                description:
                    "Trail Tracer is a competition where participants build autonomous robots to follow a dark path on a white background, navigating twists and turns while avoiding dead ends to reach the endpoint with precision and speed.",
                prize: "20000",
                date: "24 October,2024",
                link: "https://unstop.com/p/trail-tracer-line-following-bot-tantrafiesta24-iiit-nagpur-1152285",
            },
            {
                image: "/test.png",
                name: "ByteCraft : AIoT challenge",
                description:
                    "This competition invites teams to explore the potential of AIoT in healthcare, developing a prototype that solves real-world problems, optimizes operations, and creates intelligent environments to improve quality of life.",
                prize: "20000",
                date: "24 October,2024",
                link: "https://unstop.com/p/bytecraft-aiot-challenge-tantrafiesta24-iiit-nagpur-1152296",
            }
        ],
    },
    {
        name: "ELEVATE",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Genathon 2.0",
                description:
                    "Genathon 2.0 is a hackathon where participants develop innovative solutions using any tech stack, including Web Development or AI/ML. Multiple judging rounds will select the top three teams with the most effective solutions.",
                prize: "30000",
                date: "24 October,2024",
                link: "https://unstop.com/p/genathon-20-tantrafiesta24-iiit-nagpur-1151648",
                
            },
            {
                image: "/test.png",
                name: "Bug Bounty Blitz",
                description:
                    "Bug Bounty Blitz is a quest where participants find, report, and optionally solve bugs in designated repositories. It emphasizes technical skill and creativity, with bugs of varying difficulty.",
                prize: "30000",
                date: "22 October,2024",
                link: "https://unstop.com/p/bug-bounty-blitz-tantrafiesta24-iiit-nagpur-1152367",
            },
            {
                image: "/test.png",
                name: "Last Man Standing",
                description:
                    "Last Man Standing is a competitive quiz challenge where teams test their knowledge, teamwork, and strategy, with a final round determining the last participant standing and the winning team.",
                prize: "10000",
                date: "22 October,2024",
                link: "https://unstop.com/p/last-man-standing-tantrafiesta24-iiit-nagpur-1152320",
            }
        ],
    },
    {
        name: "DIMENSIONS",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "GAME JAM: COSMIC CRAFTATHON",
                description:
                    "Participants in this game jam are tasked with developing a 2D space exploration game. The theme encourages creativity in designing gameplay mechanics that allow players to navigate space.",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/cosmic-craftathon-game-jam-tantrafiesta24-iiit-nagpur-1153155",
                
            },
            {
                image: "/test.png",
                name: "RENDER RIOT",
                description:
                    "We're excited to announce our 3D animation competition with the theme 'From Stone to Silicon.' This theme challenges participants to visually depict the evolution of technology—from the earliest stone tools to the advanced digital age we live in today.",
                prize: "10000",
                date: "20 October,2024",
                link: "https://unstop.com/p/render-riot-tantrafiesta24-iiit-nagpur-1153167",
            },
        ],
    },
    {
        name: "PROBE",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Digital Time capsule : Tantrafiesta memories",
                description:
                    "The Digital Time Capsule is an initiative capturing the essence of TantraFiesta, where participants submit creative content showcasing their memorable festival moments. This content will be digitally preserved.",
                prize: "20000",
                date: "24 October,2024",
                link: "https://unstop.com/p/digital-time-capsule-tantrafiesta-memories-tantrafiesta24-iiit-nagpur-1154178",
                
            },
            {
                image: "/test.png",
                name: "BrandXperience",
                description:
                    "We're excited to announce our 3D animation competition with the theme 'From Stone to Silicon.' This theme challenges participants to visually depict the evolution of technology—from the earliest stone tools to the advanced digital age we live in today.",
                prize: "10000",
                date: "20 October,2024",
                link: "https://unstop.com/p/render-riot-tantrafiesta24-iiit-nagpur-1153167",
            },
        ],
    },
    {
        name: "STROKES",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Design-a-thon",
                description:
                    "The design competition has two rounds: an online case study with design improvements, and a 12-hour offline round at IIITN, where participants tackle real-world design challenges with surprise twists.",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/design-a-thon-tantrafiesta24-iiit-nagpur-1153172",
                
            }
        ],
    },
    {
        name: "ORATOR",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Cypher Chronicles",
                description:
                    "NO ACCESS",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/the-cypher-chronicles-tantrafiesta24-iiit-nagpur-1154112",
                
            }
        ],
    },
    {
        name: "TF CENTRAL TEAM",
        description: "Tantra Fiesta - The Tech Fest of IIIT Nagpur",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "EnigmaXplore 2.0",
                description:
                    "EngimaXplore will be a cyber security competition- Jeopardy Style,  for participants to show their skills in various areas of computing and solve real-life security challenges.",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/engimaxplore-20-ctf-tantrafiesta24-iiit-nagpur-1153719",
                
            },
            {
                image: "/test.png",
                name: "Women Only Hackthon",
                description:
                    "WomenInDev 1.0 is a women-only hackathon where participants solve real-world problems using technologies like web development, AI/ML, and data science. The top teams are judged on creativity, effectiveness, and real-world impact.",
                prize: "30000",
                date: "24 October,2024",
                link: "https://unstop.com/p/womenindev-womens-only-hackathon-tantrafiesta24-iiit-nagpur-1153208",
            },
            {
                image: "/test.png",
                name: "FreeFire",
                description:
                    "The Free Fire Competition requires all teams to thoroughly review and follow the tournament rules and regulations. By participating, teams agree to abide by these rules, and any violations will result in immediate disqualification without further discussion.",
                prize: "5000",
                date: "24 October,2024",
                link: "https://unstop.com/p/battle-of-fire-freefire-tantrafiesta24-iiit-nagpur-1151619",
            },
            {
                image: "/test.png",
                name: "CODM",
                description:
                    "Call of Duty comepetition",
                prize: "5000",
                date: "24 October,2024",
                link: "https://unstop.com/p/warzone-warrior-codm-tantrafiesta24-iiit-nagpur-1151609",
            },
            {
                image: "/test.png",
                name: "Clash Royale",
                description:
                    "Clash Royale comepetition",
                prize: "2000",
                date: "24 October,2024",
                link: "https://unstop.com/p/royal-showdown-clash-royale-tantrafiesta24-iiit-nagpur-1151587",
            },
            {
                image: "/test.png",
                name: "Chess",
                description:
                    "The Checkmate Challenge is a two-day chess competition held as part of Tantrafiesta 2k24, offering participants the chance to showcase their chess skills.",
                prize: "5000",
                date: "24 October,2024",
                link: "https://unstop.com/p/the-shatranj-up-chess-competition-tantrafiesta24-iiit-nagpur-1151548",
            }
        ],
    },
    {
        name: "UDYAM",
        description: "",
        image: "/3.jpg",
        events: [
            {
                image: "/test.png",
                name: "Innovation Oasis",
                description:
                    "Innovation Oasis 2024 celebrates innovation and entrepreneurship, where participants pitch startup ideas to judges, focusing on creativity and business viability. It's aimed at students passionate about turning their ideas into reality.",
                prize: "50000",
                date: "25 October,2024",
                link: "https://unstop.com/p/innovation-oasis24-tantrafiesta24-iiit-nagpur-1153814",
                
            },
            {
                image: "/test.png",
                name: "Vyapar Vichar",
                description:
                    "Vyapaar Vichar is an event aimed at showcasing the marketing talents of aspiring entrepreneurs, encouraging participants to think creatively, strategize effectively, and present their ideas with confidence in the dynamic entrepreneurial landscape.",
                prize: "25000",
                date: "24 October,2024",
                link: "https://unstop.com/p/vyapar-vichar24-the-case-study-event-tantrafiesta24-iiit-nagpur-1153782",
            },
        ],
    }

]

export default  data;