/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jason's Portfolio",
  description:
    "An undergrad who always thrives to work on technical solutions to the real-world issues which utilzes quantitive analysis with programming capacity to create impactful contributions. Meeting a better self is my lifelong motto.",
  og: {
    title: "Jason Yu Portfolio",
    type: "website",
    url: "http://jasonyu.com/",
  },
};

//Home Page
const greeting = {
  title: "Jason Yu",
  logo_name: "JasonYu",
  subTitle:
    "An undergraduate who always thrives to work on technical solutions to real-world issues that utilize quantitative analysis with programming capacity to create impactful contributions. Meeting a better self is my lifelong motto.",
  githubProfile: "https://github.com/JasonYu1028",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jason-yu-a739bb232/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/JasonYu1028",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Email",
    link: "mailto:z327yu@uwaterloo.ca",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Wechat",
    link:
      "https://drive.google.com/file/d/1sFZrLWI-SiW3P8RYRlnSvqt7IKXpExUr/view?usp=share_link",
    fontAwesomeIcon: "fa-weixin",
    backgroundColor: "#A9225C",
  },
];

const skills = {
  data: [
    {
      title: "Computer Science & Mathematics",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designed and developed object-oriented programming game projects",
        "⚡ Built full-stack applications (MERN)",
        "⚡ Knowledge of algorithm design and data abstraction, designing functional programs, optimization, and data analytics",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "gg:c-plus-plus",
          style: {
            color: "#8bd000",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "mdi:alpha-c-box",
          style: {
            color: "##008bd0",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "skill-icons:nodejs-dark",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#38DB71",
          },
        },
        {
          skillName: "Strapi",
          fontAwesomeClassname: "logos:strapi-icon",
        },
      ],
    },
    {
      title: "Finacial Modelling & Consulting",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Solved challenging business issues and advised impactful recommendations by utilizing advanced analytical and insight-delivery techniques",
        "⚡ Expertise in quantitative analytics, encompassing data governance, mining, quality, processing, reporting, visualization, and intelligent automation through algorithm development, modelling, and testing",
        "⚡ Comprehensive quantitative modelling for dynamic forecasting in portfolio allocation and risk & compliance services",
      ], 
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            color: "#6500d0",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "carbon:logo-r-script",
          style: {
            color: "#95d000",
          },
        },
        {
          skillName: "BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#d0009c",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#32a852",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "vscode-icons:file-type-numpy",
          style: {
            color: "#d0009c",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & AI & ML",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with Bot, NLP, and Cost Saving services on Azure",
        "⚡ Prototyped an AI-based web bot to benefit people seeking digital sources for secured investment",
        "⚡ Deploying Machine Learning models on the cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "ML",
          fontAwesomeClassname: "carbon:machine-learning",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "AI",
          fontAwesomeClassname: "eos-icons:ai-operator",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/JasonYu327/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Waterloo",
      subtitle: "Bachelor of Computing and Financial Management",
      logo_path: "uwaterloo.png",
      alt_name: "UW",
      duration: "Sep 2021 - Apr 2026",
      descriptions: [
        "⚡ I am studying in Computer Science and Finance Double Major that I would like to describe as computational finance",
        "⚡ I have gotten a GPA of 3.9 and Term Distinction every term",
        "⚡ Relevant Courses are Object-Oriented Software Development, Algorithm Design and Data Abstraction, Designing Functional Programs, Probability, Capital Markets, Financial Markets and Data Analytics",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure AI Fundamentals",
      subtitle: "- Microsoft Certified",
      logo_path: "Azure_AI_Fundamentals.png",
      certificate_link:
        "https://www.credly.com/badges/00a58fdb-3fc5-49a3-a81f-52d245b3843c?source=linked_in_profile",
      alt_name: "Microsoft Azure AI",
      color_code: "#0C9D5899",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "- Microsoft Certified",
      logo_path: "Azure_Fundamentals.png",
      certificate_link:
        "https://www.credly.com/badges/9f80a4e6-2bbc-47f6-bda8-15f977ef6a8c?source=linked_in_profile",
      alt_name: "Microsoft Azure",
      color_code: "#D83B0199",
    },
    {
      title: "Data Scientist with Python",
      subtitle: "- DataCamp Certified",
      logo_path: "DataCamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/92ed488fcf7d409a6e19ba2cd909db2b19b28c2f",
      alt_name: "DataCamp DS",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I once co-founded and managed my own international trading company to develop my entrepreneurship just before starting my first coop job. Up till now, I have been completing two coop jobs (four-month internship) at well-known enterprises.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst, Governance Risk Compliance Services",
          company: "KPMG LLP",
          company_url: "https://www.kpmg.com/",
          logo_path: "KPMG.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Ontario, Canada",
          description:
            "I cooperated with internal audit directors and audit committees to develop a quality internal audit function that delivers strategic business assurance and identifies business opportunities. Working across geographies and industries to take on challenging and ground-breaking projects, I solved challenging business issues and developed impactful recommendations by utilizing advanced analytical and insight-delivery techniques.",
          color: "#0C9D58",
        },
        {
          title: "Azure AI for Financial Services (Investment Developer)",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "Microsoft.png",
          duration: "May 2022 - Aug 2022",
          location: "Ontario, Canada",
          description:
            "I, together with three team members, proposed a financial coaching solution built on various sorts of Azure Services and comprehensive use of Machine Learning that benefited overall 45% of people in the Americas seeking digital sources for secured investment. The designed AI-based web bot offered graduates the power to make educated and tailored decisions to help prosper their financial independence by recommending suitable investment strategies.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Co-Founder and Executive Department Director",
          company: "Kaiqi Trading",
          logo_path: "Kaiqi.jpeg",
          duration: "Jan 2021 - Apr 2022",
          location: "Liaoning, China",
          description:
            "I mainly directed the operation and sales departments and regularly updated products to keep our website active to current customers and attract new potential buyers. On a monthly basis, I analyzed backend data of product browsing, clicking rate, sales history, and customers’ expectations by SQL and R to enhance purchasing experience and improve client retention rate.",
          color: "#0879bf",
        },
        {
          title: "Enterprise Procurement Executive",
          company: "Sencun International Trade",
          logo_path: "Sencun.jpeg",
          duration: "Jan 2020 - Jan 2021",
          location: "Guangdong, China",
          description:
            "Serving as a liaison between corporate buyers and supplies, I orchestrated the closure of six enterprise-level contracts that totally generated over 1M in revenue. As my main duty, I oversaw the sourcing, manufacturing, quality assurance, and delivery of the procured commodity.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Volunteer",
          company: "Local Community",
          logo_path: "Lishan.png",
          duration: "Apr 2021 - June 2021",
          location: "Liaoning, China",
          description:
            "During the severest stage of COVID-19, I collaborated with hundreds of volunteers to serve the best interests of the community, where we organized and oversaw public presentations to increase community awareness about the pandemic. Also, we prevented the spread of the virus by investigating close contacts of the infected, and we curated and designed advertising awareness materials in social media and television on COVID.",
          color: "#D83B01",
        },
        {
          title: "Overseas Studying Adviser",
          company: "Student Leadership Program",
          logo_path: "SLP.png",
          duration: "Jan 2021 - Feb 2021",
          location: "Ontario, Canada",
          description:
            "I shared my foreign experiences and suggestions and answered doubts about daily routine and campus lifethrough distance conferences with teenagers interested in and about to study abroad. I provided rational advice of undergraduate college and major selection by evaluating and matching students with Canadian universities and programs.",
          color: "#0C9D58",
        },
        {
          title: "Director of festival galas",
          company: "Maple Leaf Collegiate",
          company_url: "https://mapleleafcollegiate.com/",
          logo_path: "MLC.jpeg",
          duration: "Feb 2020",
          location: "Ontario, Canada",
          description:
            "I arranged and assigned groups with corresponding tasks to prepare events on the right track, scheduled the performance list, checked with related students and attending professors, booked a proper venue for the ceremony, and acted as a director to ensure a smooth operation.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. More projects are ongoing.... Please saty tuned.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [],
};

// About me Page
const aboutMe = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Self.png",
    description:
      "I am available on every social media. You can leave me a message, and I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "31 Erbsville Court, Waterloo, Ontario, Canada, N2J 3Z4",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/dGmQWf5YF2nM8BFy6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (226)581-1318",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  aboutMe,
  contactPageData,
};
