const name = "Bhumi Sharma";
const siteUrl = "https://bhumisharma.com";

export const site = {
    title: name,
    description:
        "Hello, I'm a passionate professional social worker thriving on empowering individuals through training and holistic development. As an ex-NCC Air Wing Cadet, I bring discipline and a strong sense of commitment to everything I do. My dedication to helping people achieve growth and success in both their personal and professional lives.",
    hero: {
        site: siteUrl,
        name: name,
        phrase: "I weave empathy and action into every thread of my life.",
        description: (
            <p>
                Hello, I&apos;m a passionate professional{" "}
                <span>social worker</span> thriving on <span>empowering</span>{" "}
                individuals through <span>training</span> and{" "}
                <span>holistic development.</span> As an{" "}
                <span>ex-NCC Air Wing Cadet,</span> I bring discipline and a
                <span> strong sense of commitment </span> to everything I do.
                <br />
                My dedication to helping people <span>
                    achieve growth
                </span> and <span>success</span> in both their personal and
                professional lives.
            </p>
        ),
        resumePath: "./BhumiSharma_CV.pdf",
        resumeUpdated: "January 01, 2025",
        socials: [
            {
                label: "Mail",
                url: "mailto:sbhumi294@gmail.com",
            },
            {
                label: "Linkedin",
                url: "https://www.linkedin.com/in/bhumisharma274/",
            },
            {
                label: "Twitter",
                url: "https://twitter.com/leadwithbhumi",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/leadwithbhumi",
            },
        ],
        skills: [
            {
                label: "Leadership & Management",
                tags: [
                    "Strategic Planning",
                    "Decision-making",
                    "Collaboration",
                ],
            },
            {
                label: "Social Work Enterprise",
                tags: ["Advocacy", "Community Engagement", "Empowerment"],
            },
            {
                label: "Training & Development",
                tags: ["Certified PoSH Trainer", "Awareness Sessions"],
            },
            {
                label: "Languages",
                tags: ["Enlish", "Hindi", "Gujarati"],
            },
        ],
    },
};
