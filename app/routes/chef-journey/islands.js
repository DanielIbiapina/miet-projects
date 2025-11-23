// Chef's Journey Islands Data
// Each island represents a phase of the Design Thinking classes

export const islands = [
  {
    id: "prepping",
    title: "PREPPING",
    subtitle: "The Journey Begins",
    description:
      "Our first steps into Design Thinking: from strangers to Pasta Lovers, from theory to our own creative process model.",
    classes: "Classes 1 & 2 — September 27 & October 4",

    // CLASS 1 CONTENT
    class1: {
      title: "Class 1: Introduction & Team Building",
      date: "September 27",
      icebreaker: {
        title: "The 60-Second Activity",
        description:
          "A dynamic team-building exercise where we discovered each other through drawing, storytelling, and ideation in parallel.",
        roles: [
          "One person drew",
          "One person talked about themselves",
          "One person wrote ideas on post-its",
        ],
        outcome: "We found our common ground: love for Italian cuisine 🍝",
        teamName: "Pasta Lovers",
        reflection:
          "This activity embodied core DT principles: collaboration, rapid iteration, and finding unexpected connections. The constraint of 60 seconds forced us to think fast and trust each other immediately.",
      },
      theory: {
        title: "Design Thinking: History & Evolution",
        timeline: [
          "1980s: Researchers Cross, Lawson, and Rowe explore design cognition",
          "1990s: IDEO transforms DT from design practice to business innovation",
          "2000s: Stanford d.school formalizes DT education",
          "2010s: DT becomes mainstream in business and education",
        ],
        corePrinciples: [
          "Human-centered approach",
          "Collaboration across disciplines",
          "Experimentation & iteration",
          "Divergent & convergent thinking",
          "Visualization & prototyping",
          "Holistic vision",
        ],
        modelsIntroduced: [
          "Stanford d.school (5 stages)",
          "IDEO's Human-Centered Design",
          "British Council's Double Diamond",
          "Mindshake evolution",
          "Liedtka & Ogilvie's 4 questions",
        ],
        caseStudies: [
          "The Chef as a metaphor for creative process",
          "Airbnb's turnaround using Design Thinking",
        ],
      },
      courseStructure: {
        title: "Understanding the Course Journey",
        duration: "6 sessions (Sep 27 → Nov 8)",
        competencies: [
          "Contextual sensitivity",
          "Autonomous research",
          "Real-world practice",
          "Multidisciplinary collaboration",
          "Critical thinking",
          "Entrepreneurial attitude",
        ],
      },
    },

    // CLASS 2 CONTENT
    class2: {
      title: "Class 2: Creating Our Own DT Model",
      date: "October 4",
      modelsAnalyzed: {
        title: "DT Process Models Explored",
        models: [
          {
            name: "Double Diamond",
            origin: "British Design Council, 2005",
            focus: "Discover → Define → Develop → Deliver",
          },
          {
            name: "3 I Model",
            origin: "IDEO, 2008",
            focus: "Inspiration → Ideation → Implementation",
          },
          {
            name: "d.school Process",
            origin: "Stanford & Potsdam, 2010",
            focus: "Empathize → Define → Ideate → Prototype → Test",
          },
          {
            name: "4 Questions Model",
            origin: "Liedtka & Ogilvie, 2011",
            focus: "What is? → What if? → What wows? → What works?",
          },
          {
            name: "The Loop",
            origin: "IBM, 2013",
            focus: "Observe → Reflect → Make (∞ continuous)",
          },
          {
            name: "Mindshake Evolution",
            origin: "2012-2017",
            focus: "Topographic map metaphor",
          },
          {
            name: "HCD Toolkit",
            origin: "IDEO, 2015",
            focus: "Hear → Create → Deliver",
          },
        ],
      },
      ourModel: {
        title: "Chef's Journey: Our Process Model",
        description:
          "We created our own non-linear DT process using a treasure map metaphor with a chef navigating between islands.",
        concept:
          "The chef's ship can move freely between islands, emphasizing the iterative and non-linear nature of Design Thinking.",
        originalIslands: [
          "TASTING — Experiencing the problem",
          "PREPPING — Doing the research",
          "INGREDIENTS — Collecting the ideas (center)",
          "COOKING — Develop the solution",
          "PLATING — Prototyping",
          "FEEDBACK — Evaluating and improving",
          "SERVING — Delivering to the client",
        ],
        keyInsight:
          "No fixed path: the chef could go from Tasting → Prepping → back to Tasting → Ingredients → Cooking → back to Prepping → Plating → Feedback → back to Plating → Serving → Feedback. This captured the reality of design processes better than linear models.",
        visualElements: [
          "Hand-drawn treasure map style",
          "Chef's ship navigating",
          "7 islands with distinct identities",
          "No connecting lines (freedom of movement)",
          "Ocean surrounding all islands",
        ],
        professorNote:
          "The professor hinted we'd revisit and adjust this model in the final class based on our actual experience.",
      },
    },

    // REFLECTIONS
    reflections: [
      {
        topic: "From Strangers to Pasta Lovers",
        text: "The rapid team formation showed how Design Thinking principles work in practice. Within minutes, we went from individual strangers to a collaborative unit with a shared identity.",
      },
      {
        topic: "Theory vs. Practice",
        text: "Learning about multiple DT models revealed there's no 'one true way.' Each organization adapts DT to their context, which gave us permission to create our own.",
      },
      {
        topic: "The Non-Linear Reality",
        text: "Our Chef's Journey model challenged the sequential nature of textbook DT models. We instinctively knew that real creative work doesn't follow straight lines.",
      },
      {
        topic: "Multidisciplinarity as Strength",
        text: "Mixing nationalities and backgrounds wasn't just diversity for diversity's sake—it brought genuinely different perspectives that enriched our process from day one.",
      },
    ],

    // Key takeaways for dossier
    dossierHighlights: [
      "Collaborative team formation through creative constraints",
      "Understanding DT's evolution from design to business innovation",
      "Analysis of 7+ established DT process models",
      "Creation of original Chef's Journey process model",
      "Recognition of non-linearity in creative processes",
      "Application of DT principles to our own team building",
    ],

    activities: [
      "60-second team building exercise",
      "Formation of 'Pasta Lovers' group identity",
      "Study of DT history and evolution",
      "Analysis of multiple DT process models",
      "Creation of Chef's Journey treasure map",
      "Visual mapping of non-linear process",
    ],

    learnings: [
      "Design Thinking is not a rigid formula but an adaptable mindset",
      "Non-linear processes better reflect creative reality",
      "Team identity emerges through shared experiences and discoveries",
      "Visual metaphors (like cooking) make abstract processes tangible",
      "Historical context helps understand why DT evolved this way",
    ],

    images: [
      // Add your photo paths here:
      "/images/chef-journey/prepping/profile.png",
      "/images/chef-journey/prepping/processmodel1.png",
    ],

    color: "#FF6B6B",
    icon: "🔍",
    position: { x: 15, y: 60 },
    layoutType: "timeline", // Special timeline layout for this island
  },
  {
    id: "tasting",
    title: "TASTING",
    subtitle: "Experiencing the Problem",
    description:
      "Going to the field: identifying opportunities, understanding users deeply through observation and interviews, and framing our design challenge.",
    classes: "Class 3 — October 11",

    classObjective:
      "Identification of a business opportunity and getting empathy with the users.",

    // TOOLS FRAMEWORK
    researchTools: {
      divergence: {
        title: "Divergence Tools",
        subtitle: "Expanding possibilities and gathering insights",
        tools: [
          {
            name: "Trend Observation",
            description:
              "Analyzing global trends and mega-trends related to our theme",
          },
          {
            name: "Primary Research",
            description: "Direct contact with users and stakeholders",
          },
          {
            name: "Media Research",
            description: "Online research and digital sources exploration",
          },
          {
            name: "Secondary Research",
            description: "Academic papers, reports, and existing studies",
          },
          {
            name: "Opportunity Mind Map",
            description: "Visual mapping of opportunities and connections",
          },
        ],
      },
      convergence: {
        title: "Convergence Tools",
        subtitle: "Focusing and defining the challenge",
        tools: [
          {
            name: "Trend Matrix",
            description: "Classifying and organizing identified trends",
          },
          {
            name: "Inspiration Board",
            description: "Visual collection of references and inspiration",
          },
          {
            name: "Challenge Framing",
            description: "Defining the design question clearly",
          },
          {
            name: "Intent Statement",
            description: "Articulating our design intention",
          },
        ],
      },
    },

    // MEGA TRENDS
    megaTrends: {
      explored: [
        "Smart Exploration",
        "Open Source AI",
        "Green Tech",
        "Quantum Computing",
        "Human Augmentation",
        "Response to AI",
        "Empathic Theory",
        "Future of Work",
        "Connectivity",
        "Demographics",
        "Globalization",
        "Urbanization",
      ],
      visualization:
        "Metro map style with interconnected colored lines representing different trend categories",
    },

    // OPPORTUNITY MIND MAP
    opportunityMindMap: {
      title: "Our Opportunity Mind Map: Future of Work",
      central: "Future of Work",
      instructions: [
        "Start in the center with your topic and theme",
        "Choose 5-7 main categories",
        "Expand the map with associations and sketches",
        "Make connections between ideas",
        "Identify 3 opportunities and choose the most promising",
      ],
      categories: [
        {
          name: "Innovation",
          color: "green",
          branches: [
            "Gamification",
            "Design Thinking",
            "→ Design Games",
            "→ VR",
          ],
        },
        {
          name: "Flexibility",
          color: "pink",
          branches: [
            "Freedom",
            "Job Rotation → Commute, Schedules",
            "Work-Life Balance → Remote Work, Flex Hours, Reduced Hours, Productivity",
            "Remote Work → 365 Global Offices, Home Office 100%",
          ],
        },
        {
          name: "Human",
          color: "blue",
          branches: [
            "Human-to-Human Experience",
            "Workplace → Ergonomic (ExoSuit), Inspiring",
            "Collaboration → Co-Creation",
            "Protection",
          ],
        },
        {
          name: "AI and Robotics",
          color: "red",
          branches: [
            "Automation",
            "Better Prototyping",
            "→ Less Time Waste",
            "→ Digital Classes",
            "→ connects to Less Waste",
          ],
        },
        {
          name: "Regulation",
          color: "yellow",
          branches: [
            "Protection (connects to Human)",
            "Parental Rights",
            "Sustainability → Gender Equality → Women Leadership",
            "→ Responsible Consumption → Less Waste",
          ],
        },
      ],
      keyInsight:
        "Multiple connections emerged between categories, showing the interconnected nature of Future of Work challenges.",
    },

    // CHALLENGE FRAMING
    challengeFraming: {
      source: "The Field Guide to Human-Centered Design by IDEO.org",
      questions: [
        "What's the problem you're trying to solve?",
        "Take a stab at framing it as a design question",
        "Now state the ultimate impact you're trying to have",
        "What are some possible solutions? Think broadly, allow for surprising outcomes",
      ],
    },

    // INTENT STATEMENT
    intentStatement: {
      framework: ["Intention", "Opportunities", "New Value", "Public", "Risks"],
      note: "Our first structured intent statement was created using this framework",
    },

    // FIELD OBSERVATION & INTERVIEWS
    fieldResearch: {
      title: "Field Observation & Interviews",
      contexts: [
        "Library",
        "Service workers",
        "Online discovery (LinkedIn, Udemy)",
      ],
      approach: {
        structured: {
          pros: [
            "Easier to compare results",
            "Suitable for testing specific properties",
            "Good for advanced project phases",
          ],
        },
        unstructured: {
          pros: [
            "Appropriate for initial phases",
            "Builds user profiles",
            "Informal environment",
            "Allows adaptation",
          ],
        },
        chosen: "Semi-structured with storytelling approach",
      },
      storytellingTip: "Tell me about a time you dealt with a digital problem.",
    },

    // INTERVIEW QUESTIONS
    interviewQuestions: {
      theme: "Digital Literacy",
      sections: [
        {
          category: "Current Usage",
          questions: [
            "Can you describe your general relationship with technology in your daily life?",
            "What digital devices do you use most often?",
            "In what contexts do you usually use digital tools?",
            "Have you ever taken part in any training related to digital skills?",
          ],
        },
        {
          category: "Learning Preferences",
          questions: [
            "How often (percentage) do you use digital media to learn?",
            "When was the last time you learned something new? Could you describe it?",
            "Are there digital tools or platforms you rely on more than others? Why?",
            "Which topics do you find most relevant? (online safety, AI, social media, productivity tools, digital citizenship)",
            "What type of learning format do you prefer? (in-person workshops, online tutorials, educational games, mentoring, etc.)",
          ],
        },
        {
          category: "Challenges & Difficulties",
          questions: [
            "What difficulties do you face when using digital technologies?",
            "Are there digital tasks you avoid due to lack of confidence or knowledge?",
            "Can you share an example of when digital media helped you accomplish a task faster or better?",
          ],
        },
        {
          category: "Motivation & Outcome",
          questions: [
            "What would motivate you to actively participate in a digital literacy project?",
            "Do you think improving your digital literacy could impact your personal or professional life?",
            "If yes: What digital skills would you like to develop or improve? Would you use it?",
            "If no: What would be an interesting way for you to learn?",
            "Is there anything else you would like to add or suggest?",
          ],
        },
      ],
    },

    // USER VS CLIENT INSIGHT
    userVsClient: {
      title: "Understanding User vs. Client",
      analogy:
        "Parents playing with baby toy: Parents see the fun features (client perspective), but baby only sees parents' backs (actual user experience)",
      lesson:
        "The client who commissions the project may not be the actual end user",
    },

    activities: [
      "Explored divergence and convergence tools",
      "Analyzed mega-trends related to our theme",
      "Created Opportunity Mind Map (Future of Work)",
      "Framed our design challenge using IDEO framework",
      "Developed Intent Statement",
      "Conducted field observation planning",
      "Designed interview guide",
      "Performed interviews with target users",
      "Distinguished between user and client perspectives",
    ],

    learnings: [
      "Divergence expands possibilities, convergence focuses them",
      "Mind mapping reveals unexpected connections between concepts",
      "Storytelling approach makes interviews more natural and insightful",
      "Understanding the difference between user and client is crucial",
      "Field research provides context that desk research cannot",
      "Semi-structured interviews balance consistency with flexibility",
      "Empathy comes from direct contact, not assumptions",
    ],

    images: [
      "/images/chef-journey/tasting/mind-map.png",
      "/images/chef-journey/tasting/mindmap2.png",
      "/images/chef-journey/tasting/intentstatement.jpeg",
      // Add your photo paths here:
      // "/images/chef-journey/tasting/opportunity-mind-map.jpg"
      // "/images/chef-journey/tasting/intent-statement.jpg"
      // "/images/chef-journey/tasting/interview-1.jpg"
      // ... more interview screenshots
    ],

    color: "#4ECDC4",
    icon: "👂",
    position: { x: 30, y: 45 },
    layoutType: "notebook", // New unique layout!
  },
  {
    id: "cooking",
    title: "COOKING",
    subtitle: "Develop the Solution",
    description:
      "Immersive ideation phase: rapid brainwriting, analogical thinking, voting, and bringing our AR glasses prototype to life.",
    classes: "Class 4 — October 18",

    // INTENT STATEMENT (from Class 3, finalized here)
    intentStatement: {
      intention:
        "Make digital literacy accessible to older people so they can participate actively and independently in the digital world",
      opportunities:
        "Providing accessible and friendly learning opportunities, encouraging autonomy, improving quality of life, and strengthening community connections. Also, allowing them to enter the economy again.",
      newValue:
        "To empower older adults with digital literacy so they can stay connected, informed, and self-sufficient in their daily lives",
      public: "Older people, 60+ years",
      risks:
        "Not being well-received, not getting enough financial support, threat of AI and scams",
    },

    // HOW MIGHT WE QUESTIONS
    hmwQuestions: [
      {
        question:
          "How Might We Develop/Supply the Right Digital Content so that Older People Will Not Be Impacted Too Much by the AI Transformation?",
        focus: "Content & Protection",
      },
      {
        question:
          "How Might We Bring Digital Literacy Training Directly to Places Where Older People Already Are So that They Have Easy Access to It?",
        focus: "Accessibility & Reach",
      },
      {
        question:
          "How Might We Make Digital Learning Feel Friendly and Non-Intimidating for Older Adults so that They Feel Motivated?",
        focus: "User Experience & Motivation",
      },
    ],

    // BRAINWRITING SESSION
    brainwriting: {
      approach: "Anonymous rapid ideation",
      rules: [
        "Everyone writes with the same color post-it (no identification)",
        "Write quickly, don't overthink",
        "Build on others' ideas",
        "Quantity over quality at this stage",
        "All ideas are valid",
      ],
      analogies: {
        description: "Professor introduced analogies to spark creativity",
        examples: [
          "Ideas that could work in Formula 1",
          "Ideas that could be used in church",
          "Ideas related to steering wheels",
          "Cross-domain thinking",
        ],
      },
      ideasGenerated: [
        "Digital Editor",
        "Use Students as Volunteers",
        "Use TV Programs",
        "Make Channels",
        "Use Wearables",
        "Tablet Devices with Only Voice Control",
        "Make Them Feel Good",
        "Use Alexa to Pray",
        "Use Simulator",
        "Offering a Race to Older People",
        "Individual Classes",
        "Giving Spaces for Conferences",
        "In Home Robots",
        "A Chatbot Companion",
        "Smart House",
        "Clean Robots",
        "VR Classes",
        "Use Newspapers",
        "Including Conferences",
        "Clean User Interface",
        "Use Religion to Motivate",
        "Create Easy Step-by-Step",
        "WeWork Participation",
        "Gamification",
        "Family Approach",
        "Go to Cafes and Libraries",
        "Teach Reading",
        "Social Working Skills",
      ],
      note: "Many more ideas generated - see photos for complete wall of post-its!",
    },

    // VOTING SESSION
    voting: {
      topVoted: [
        { idea: "Use AI to Teach and Help", votes: 3, rank: 1 },
        { idea: "Clean User Interface", votes: 2, rank: 2 },
        { idea: "A Chatbot Companion", votes: 2, rank: 2 },
        { idea: "VR Classes", votes: 1, rank: 3 },
        { idea: "Use Simulator", votes: 1, rank: 3 },
        { idea: "Smart House", votes: 1, rank: 3 },
        { idea: "In Home Robots", votes: 1, rank: 3 },
        { idea: "WeWork Participation", votes: 1, rank: 3 },
        { idea: "Use TV Programs", votes: 1, rank: 3 },
        { idea: "Family Approach", votes: 1, rank: 3 },
        { idea: "Go to Cafes and Libraries", votes: 1, rank: 3 },
        { idea: "Use Students as Volunteers", votes: 1, rank: 3 },
        { idea: "Gamification", votes: 1, rank: 3 },
        { idea: "Teach Reading/Social Working Skills", votes: 1, rank: 3 },
      ],
    },

    // PROTOTYPE
    prototype: {
      title: "AR Smart Glasses for Digital Literacy",
      description:
        "Augmented Reality glasses designed to keep elderly people connected and supported in their daily digital lives",
      physicalPrototype: {
        materials: [
          "Elderly person figure/doll",
          "Yellow cardboard glasses",
          "Presentation board",
          "Scenario cards",
        ],
        presentation:
          "Team presented the concept with physical props and role-playing",
      },
      mainFeatures: [
        {
          feature: "Medication Reminders",
          description:
            "Voice alerts to remind elderly to take their medicine at the right time",
          icon: "💊",
        },
        {
          feature: "Voice-Activated Calls",
          description:
            "Easy access to call family members through voice commands - no complex menus",
          icon: "📞",
        },
        {
          feature: "AR Traffic Assistance",
          description:
            "Visual signals in the glasses showing traffic info (like Waze but in AR)",
          icon: "🚦",
        },
        {
          feature: "Daily Life Assistant",
          description:
            "Help with everyday tasks through visual and voice guidance",
          icon: "🤝",
        },
        {
          feature: "Stay Connected",
          description:
            "Keep elderly people engaged with family, community, and the digital world",
          icon: "🔗",
        },
      ],
      userScenario:
        "An elderly person wakes up, puts on the glasses, receives a reminder to take medicine, sees a visual indicator for an incoming call from their grandson, and later gets AR navigation help while crossing the street.",
    },

    activities: [
      "Refined Intent Statement from Class 3",
      "Defined 3 How Might We Questions",
      "Rapid brainwriting session (30+ ideas)",
      "Analogical thinking exercises (F1, church, etc)",
      "Democratic voting on ideas",
      "Convergence on AR wearables concept",
      "Physical prototype creation (cardboard glasses)",
      "Role-play presentation of use cases",
      "Prototype demonstration to class",
    ],

    learnings: [
      "Anonymous brainstorming removes ego and encourages wild ideas",
      "Analogies from different domains spark unexpected solutions",
      "Quantity in ideation truly generates quality",
      "Voting helps democratic decision-making",
      "Physical prototypes make abstract concepts tangible",
      "Role-playing reveals usability issues early",
      "Wearable tech can reduce intimidation (hands-free, always available)",
      "Voice control is key for low digital literacy users",
    ],

    reflections: [
      {
        topic: "From Post-its to Product",
        text: "The wall of post-its looked chaotic, but patterns emerged. Multiple people independently suggested voice control, wearables, and AI assistance - validating these as strong directions.",
      },
      {
        topic: "The Power of Constraints",
        text: "Using the same color post-its seemed like a small detail, but it freed everyone to share bold ideas without fear of judgment. Anonymity breeds creativity.",
      },
      {
        topic: "Why AR Glasses?",
        text: "Our solution addresses multiple HMW questions: it brings training to where elders are (always worn), feels friendly (voice-based), and provides right content (contextual AR assistance).",
      },
    ],

    images: [
      "/images/chef-journey/cooking/prototyping1.jpeg",
      // Add more photos:
      // "/images/chef-journey/cooking/brainwriting-wall.jpg" - Wall of post-its
      // "/images/chef-journey/cooking/brainwriting-session.jpg" - Team working
      // "/images/chef-journey/cooking/voting-results.jpg" - Voted ideas
      // "/images/chef-journey/cooking/prototype-glasses.jpg" - Yellow cardboard glasses
      // "/images/chef-journey/cooking/prototype-presentation.jpg" - Team presenting
    ],

    color: "#FFE66D",
    icon: "💡",
    position: { x: 50, y: 50 },
    layoutType: "arvision", // NEW: AR Vision mode!
    hasAREffect: false, // Now integrated into island layout itself
  },
  {
    id: "feedback",
    title: "FEEDBACK",
    subtitle: "Wrap-Up & Critical Reflection",
    description:
      "Final class: wrapping up the Design Thinking journey, critically reflecting on DT as a methodology, and revisiting our Chef's Journey model.",
    classes: "Class 6 — November 8",

    // CLASS 6 CONTENT
    class6: {
      title: "Class 6: Critical Reflection & Final Model",
      date: "November 8",

      wrapUp: {
        title: "Recap of the Design Thinking Journey",
        description:
          "The professor reviewed all the work done throughout the course, showcasing each team's process models, divergence/convergence exercises, and final prototypes.",
        ourJourney: [
          "Process Model: Chef's Journey (treasure map with islands)",
          "Divergence: Opportunity Mind Map (Future of Work theme)",
          "Convergence: Intent Statement",
          "Divergence: Brainwriting session (ideation)",
          "Convergence: Voting on top ideas",
          "Divergence: Prototyping (AR glasses scenario)",
          "Convergence: Visual Business Model Canvas",
        ],
      },

      criticalReflection: {
        title: "Critical Reflection: What DT Should Not Be",
        subtitle: "Design Thinking is Bullsh*t",
        speaker: "Natasha Jen, Pentagram Partner",
        event: "99U Conference 2017",
        description:
          "A provocative speech that critiques how Design Thinking has been trivialized and reduced to superficial practices. Natasha doesn't reject DT itself, but challenges its mainstream oversimplification—arguing that real Design Thinking should be richer, more critical, and less formulaic than the cliché '5-step process with Post-its.'",
        context:
          "This critique highlights what our course avoided: a rigid, cookie-cutter approach. Our Design Thinking journey was fluid, dynamic, personalized, and truly critical—exactly what Natasha advocates for.",

        natashaArguments: [
          {
            point: "DT has become a buzzword",
            explanation:
              "Just like 'design' itself became a buzzword, Design Thinking is now used everywhere without real understanding. Ridiculous words are thrown around without critical evaluation. The name has lost meaning.",
          },
          {
            point: "DT is presented in 5 linear steps",
            explanation:
              "The process is oversimplified as: Empathize → Define → Ideate → Prototype → Test. Real design is never this linear—it's messy, iterative, and context-dependent. Reducing DT to a formula kills its essence.",
          },
          {
            point: "CRIT (critique) is missing",
            explanation:
              "Divergent thinking = Creative thinking, but Convergent thinking should = Critical thinking. Without proper critique, there's no evaluation of whether something is truly valuable. Many DT workshops lack real critique.",
          },
          {
            point: "Design is reduced to Post-its",
            explanation:
              "DT has become synonymous with colorful sticky notes on walls, reducing complex design work to surface-level exercises. The tools became the goal, not the means.",
          },
          {
            point: "DT lacks real evidence",
            explanation:
              "'Prove it!' - Where is the tangible evidence that DT actually works better than other approaches? Many claims lack rigorous validation. The hype often exceeds the results.",
          },
        ],

        successCases: [
          "Healthcare: Rotterdam Eye Hospital transformation, Children Health System of Texas",
          "Pharmaceuticals: Roche (shift from research focus to patient-centered care)",
          "Mobility: KLM, Lufthansa, Deutsche Bahn (new infopoint systems)",
          "Startups: Airbnb, Uber Eats",
          "Entertainment: San Francisco Opera",
          "Food Industry: The Good Kitchen, Nespresso, Pepsi Co",
          "Governments: Singapore, Melbourne, London, Berlin",
        ],

        argumentsForDT: [
          "DT improves collaborative processes and keeps the team on track",
          "DT unleashes people's creative thinking potential",
          "DT improves the commitment and engagement of team members",
          "DT focuses on user-driven criteria instead of marketing-related criteria",
          "The structure of the DT process helps managers experiment with new ways of working",
          "DT permits immersion in user experiences, providing material for deeper learning",
          "DT emphasizes engagement, dialogue, and courage to change",
          "The DT tools deliver a sense of security in uncertain innovation processes",
        ],
      },

      chefsJourneyFinal: {
        title: "Chef's Journey — Final Version",
        description:
          "After completing the entire Design Thinking process, we revised our Chef's Journey model based on our real experience. Some islands were eliminated, and the flow was refined.",
        changes: [
          "❌ 'INGREDIENTS' island was abolished",
          "❌ 'PLATING' island was abolished (merged with SERVING)",
          "✅ Linear flow emerged from practice (though iteration is still possible)",
          "✅ More realistic representation of what we actually did",
        ],
        finalFlow: [
          {
            island: "PREPPING",
            subtitle: "Doing the Research",
            activities: [
              "Look at the megatrends/categories (mindmap)",
              "Researched online",
              "First Intent Statement",
            ],
          },
          {
            island: "TASTING",
            subtitle: "Experiencing the Problem",
            activities: ["Interviewing/observation"],
          },
          {
            island: "COOKING",
            subtitle: "Develop the Solution",
            activities: ["Brainstorming/Brainwriting", "Prototyping"],
          },
          {
            island: "FEEDBACK",
            subtitle: "Evaluating and Improving",
            activities: ["Voting", "Refine Intent Statement"],
          },
          {
            island: "PLATING & SERVING",
            subtitle: "Delivering to the Client",
            activities: ["Pitch", "Business Model Canvas"],
          },
        ],
        reflection:
          "Creating our own model at the beginning vs. revising it at the end showed us the gap between theory and practice. The iterative, non-linear nature we imagined gave way to a more structured flow in reality, but that's okay—it's what worked for our project.",
      },

      learningOutcomes: {
        title: "Competences Developed in This Course",
        outcomes: [
          "Contextual sensitivity (when and how DT techniques are used)",
          "Autonomous research in the domain of Design Thinking and Innovation",
          "Familiarization with the steps of a DT process",
          "Hands-on experience in framing, concept exploration, developing, and communicating solutions",
          "Awareness of multidisciplinary teamwork dynamics in innovation processes",
          "Intrinsic motivation to carry out entrepreneurial projects",
          "Critical reflection on Design Thinking and its applicability",
          "Creative and enterprising attitudes",
        ],
      },
    },

    reflections: [
      {
        topic: "What Natasha Really Means",
        text: "Natasha Jen isn't rejecting Design Thinking—she's rejecting its trivialization. Her critique targets the cliché version: rigid steps, Post-it obsession, and lack of real critique. She wants DT to be what it should be: dynamic, critical, and substantive. Our course embodied that—we were fluid, reflective, and personalized.",
      },
      {
        topic: "Avoiding the Pitfalls",
        text: "Our class didn't fall into the traps Natasha criticizes. We didn't follow a fixed 5-step formula. We adapted our process, created our own model, and continuously reflected. This is the kind of Design Thinking Natasha would respect—one that thinks critically about itself.",
      },
      {
        topic: "Theory vs. Practice",
        text: "Our initial Chef's Journey model was romantic and non-linear, emphasizing freedom. The final version, however, revealed a more structured path. This gap between expectation and reality is a crucial learning—and it shows we were reflecting critically, not just following a script.",
      },
      {
        topic: "DT as a Tool, Not a Dogma",
        text: "Design Thinking is not a magic formula or a religion. It's a framework that can help structure innovation processes, but it requires adaptation, critique, and honesty about its limitations. Our journey proved this: we evolved our model as we learned.",
      },
    ],

    learnings: [
      "Design Thinking is a useful tool, but not a universal solution—it must be applied with critical awareness.",
      "Real design processes are messier and more iterative than any model can capture.",
      "Critique and evaluation (convergent thinking) are as important as ideation (divergent thinking).",
      "Models evolve through practice—our final Chef's Journey was very different from our initial version.",
      "Collaboration and structured experimentation are DT's greatest strengths.",
      "Post-its and visual tools are helpful, but they're means, not ends.",
      "Success cases prove DT can work, but context and execution matter more than the method itself.",
      "The journey taught us not just about DT, but about teamwork, empathy, and iterative thinking.",
    ],

    images: [
      "/images/chef-journey/feedback/chefs-journey-final.jpeg", // Photo 1: Final Chef's Journey model (revised)
      "/images/chef-journey/feedback/team-photo.png", // Photo 2: Team in front of the Chef's Journey poster
    ],

    color: "#95E1D3",
    icon: "🔄",
    position: { x: 70, y: 45 },
    layoutType: "debate", // NEW: Debate/critical reflection layout
  },
  {
    id: "plating-serving",
    title: "PLATING & SERVING",
    subtitle: "Tools for Presenting the Project's Solutions",
    description:
      "Learning how to effectively communicate and present our solution through storytelling, visual business models, and elevator pitches.",
    classes: "Class 5 — October 25",

    // CLASS 5 CONTENT
    class5: {
      title: "Class 5: Presentation Tools & Business Model",
      date: "October 25",

      presentationTools: {
        divergence: ["Storytelling", "Storyboarding", "Concept Visualization"],
        convergence: [
          "Solution Prototype",
          "Visual Business Model Canvas",
          "Elevator Pitch",
          "Roadmap",
        ],
      },

      storytellingTheory: {
        title: "The Power of Storytelling",
        quotes: [
          {
            author: "Jeff Bezos, Amazon",
            text: "You can have the best technology, you can have the best business model, but if the storytelling is not amazing, it won't matter. Nobody will watch.",
          },
          {
            author: "Marco Aureli Bocci",
            text: "Only 5% of people remember statistics and graphs presented at a meeting, while 63% easily remember a well-told story.",
          },
        ],
        importance:
          "Stories help us understand and give meaning to the world. They are a powerful tool for producing meaning and creating emotional connection.",
      },

      visualStorytelling: {
        title: "Our Story in Pictograms",
        description:
          "We translated our project into a visual narrative using symbols and emojis, making the problem and solution immediately understandable.",
        /*ourStory: [
          {
            stage: "Problem Introduction",
            symbols: [
              "👴 (sad elderly person with cane, looking down, crying)",
              "→",
              "💻❓ (elderly confused at computer)",
              "→",
              "👓📶 (smart glasses with Wi-Fi)",
            ],
          },
          {
            stage: "Context & Challenge",
            symbols: [
              "🤖😈 (AI robot with evil smile)",
              "→",
              "📈💼 (job market rising, Open AI)",
              "→",
              "👓 (joins with glasses above)",
            ],
          },
          {
            stage: "Solution & Outcome",
            symbols: [
              "👓 (both storylines converge on the glasses)",
              "→",
              "👴👓😊 (elderly person wearing glasses, happy)",
            ],
          },
        ],*/
        ourStory: [],
        reflection:
          "This exercise forced us to distill complex concepts into simple, universal symbols, revealing the core emotional journey of our users.",
      },

      visualBusinessModel: {
        title: "Visual Business Model Canvas",
        description:
          "Instead of a traditional text-based business model, we created a visual representation using drawings and icons to make our business strategy immediately comprehensible.",
        components: {
          strategicPartners: [
            "🏢 Google, Apple, IBM (tech partners)",
            "🎓 Universities (educational institutions)",
            "🔨 (development/production)",
          ],
          keyActivities: [
            "💡 Innovation & ideation",
            "👨‍🔬 Scientist programming (R&D)",
            "🌐 Hello World (development)",
            "👓✨ Personalizing the glasses",
          ],
          keyResources: [
            "👥 Our team (employees)",
            "🤖 AI technology",
            "🛠️ Service infrastructure",
          ],
          valueProposition: [
            "👵👓📜 Elderly person using our glasses and raising a certificate",
            "💻🤖🎓 (codes, AI, university learning)",
            "Main message: Empowering seniors with digital literacy through AR technology",
          ],
          customerRelationship: [
            "1️⃣2️⃣3️⃣4️⃣ Learning progression (levels/steps)",
            "📜 Course completion certificates",
            "Progressive achievement system",
          ],
          distributionChannels: [
            "📺 TV advertising",
            "🛍️ Online/retail stores",
            "🚚 Home delivery",
          ],
          customerSegment: [
            "👴👵 Older adults (60+ years)",
            "💰 Various income levels",
          ],
          cost: [
            "🤖💵 AI technology costs",
            "👥💵 Employee salaries",
            "🧺💵 Operational costs",
          ],
          revenues: [
            "👓💰 Smart glasses sales",
            "🤝💰 Partnership fees",
            "💻💰 Software subscriptions",
            "📱💰 App purchases",
            "📢💰 Advertising revenue",
          ],
        },
        reflection:
          "The visual format made our business model accessible to everyone in the room, regardless of business background. However, the rushed timeline for creating both the visual model and elevator pitch left us under-prepared for the presentation.",
      },

      elevatorPitch: {
        title: "Elevator Pitch Framework",
        structure: [
          "❓ What's the problem?",
          "🔍 What caused the problem?",
          "💡 What's the solution?",
          "🛤️ How do you get there?",
          "👥 Who is the user?",
        ],
        challenge:
          "We had only 5-10 minutes to prepare the pitch and 2 minutes to deliver it, which led to a nervous and rushed presentation (mainly by me, I am sorry). Despite preparation challenges, we communicated the core value of our AR glasses for elderly digital literacy.",
      },
    },

    reflections: [
      {
        topic: "The Challenge of Visual Communication",
        text: "Creating visual representations of complex ideas forced us to truly understand our project at its core. Simplifying concepts into symbols revealed what was truly essential versus what was noise.",
      },
      {
        topic: "Time Pressure & Presentation Anxiety",
        text: "The rushed preparation time for both the visual business model and elevator pitch affected presentation quality. In real-world scenarios, effective communication requires adequate preparation time.",
      },
      {
        topic: "Storytelling as Universal Language",
        text: "Seeing how pictograms could convey our entire project narrative proved the power of visual storytelling. It transcended language barriers and made our solution emotionally resonant.",
      },
    ],

    learnings: [
      "Visual storytelling is a powerful tool for communicating complex ideas simply and emotionally.",
      "The Business Model Canvas helps visualize not just the product, but the entire ecosystem around it.",
      "Elevator pitches require clarity, brevity, and confidence—all skills that need practice.",
      "Effective presentations combine visual, verbal, and emotional elements.",
      "Simplification is harder than complication—distilling ideas to their essence requires deep understanding.",
      "Preparation time significantly impacts presentation quality and confidence.",
      "Visual business models democratize understanding—anyone can grasp the concept, not just business experts.",
    ],

    images: [
      "/images/chef-journey/plating/visual-storytelling.png", // Photo 1: Visual storytelling pictograms
      "/images/chef-journey/plating/presentation.png", // Photo 2: Team presenting the business model
      "/images/chef-journey/plating/business-model-canvas.png", // Photo 3: The visual business model (LARGE)
    ],

    color: "#A8E6CF",
    icon: "🎯",
    position: { x: 85, y: 60 },
    layoutType: "presentation", // NEW: Presentation/Stage layout
  },
];

// Intent Statement - initial vs final
export const intentStatements = {
  initial:
    "Improve digital literacy of elderly people for participation in the digital economy.",
  final:
    "To empower older adults with digital literacy so they can stay connected, informed, and self-sufficient in their daily lives.",
};

// Project information
export const projectInfo = {
  course: "Design Thinking",
  institution: "FEUP / MIETE",
  theme: "Digital Literacy for Older Adults (60+)",
  finalProduct: "Smart Glasses with Augmented Reality",
  productFeatures: [
    "Voice medication reminders",
    "Quick calls with family members",
    "Visual traffic assistance",
    "Alexa-like personal assistant",
    "Voice-simplified interface",
  ],
};
