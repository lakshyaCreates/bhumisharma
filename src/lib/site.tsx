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
                tags: ["English", "Hindi", "Gujarati"],
            },
        ],
    },
    experience: [
        {
            title: "IEEE Ganpat University Student Branch",
            duration: "January 2024 - February 2025",
            designation: "WIE Chairperson",
            location: "Mehsana",
            content: (
                <>
                    <li>
                        Collaborated with Indian Red Cross, HDFC Bank, Bhuj Air
                        Force Station, and other organizations to assist in
                        impactful events
                    </li>
                    <li>
                        Organized events and workshops focused on enhancing
                        skills and career prospects for women in engineering
                    </li>
                    <li>
                        Spearheaded initiatives promoting gender equality &
                        women’s empowerment in STEM fields
                    </li>
                </>
            ),
        },
        {
            title: "Swa Sarjan Foundation",
            duration: "June 2021 - Present",
            designation: "Vice President",
            location: "Ahmedabad",
            content: (
                <>
                    <li>
                        Led strategic planning and management efforts,
                        overseeing CSR projects and capacity-building
                        initiatives to drive organizational growth.
                    </li>
                    <li>
                        Organized 100+ events, including self-defense and
                        menstrual hygiene workshops, empowering over 10,000
                        girls and women.
                    </li>
                    <li>
                        Managed administrative functions, including
                        documentation, reporting, drafting MoUs, and
                        coordinating collaborations for various projects.
                    </li>
                </>
            ),
        },
        {
            title: "Computeria Country Camp",
            duration: "June 2024 - Sept 2024",
            designation: "International Program Counsellor",
            location: "Tver, Russia",
            content: (
                <>
                    <li>
                        Counseled over 3,000 children while introducing Indian
                        culture, traditions, and values through interactive
                        sessions.
                    </li>
                    <li>
                        Taught them a blend of diverse skills, including project
                        management, public speaking, communication, meditation,
                        yoga, and traditional dance forms like Garba.
                    </li>
                </>
            ),
        },
        {
            title: "District Child Protection Unit Ahmedabad",
            duration: "Mar 2024 - May 2024",
            designation: "Intern",
            location: "Ahmedabad",
            content: (
                <>
                    <li>
                        Coordinated the Udayan Care After Care Program and
                        managed training as Assistant Nodal Officer for PwD
                        Assistance to 110 PwD volunteers during Lok Sabha
                        Elections 2024.
                    </li>
                    <li>
                        Gained practical experience with government schemes like
                        Palak Mata Pita Yojana, After Care, Foster Care,
                        Sponsorship, and adoption processes.
                    </li>
                    <li>
                        Actively contributed to initiatives preventing child
                        marriages, child labor, and promoting child welfare.
                    </li>
                </>
            ),
        },
        {
            title: "YUVA Unstoppable NGO",
            duration: "Oct 2023 - Mar 2024",
            designation: "Intern",
            location: "Ahmedabad",
            content: (
                <>
                    <li>
                        Coordinated the Bank of America-funded Smart Classroom
                        Project as an Intern Project Coordinator
                    </li>
                    <li>
                        Supported the development and implementation of a new
                        system for the organization’s Scholarship Program.
                    </li>
                    <li>
                        Acquired HR and field experience under the Anganwadi and
                        School Transformation Program.
                    </li>
                </>
            ),
        },
        {
            title: "Air Force Association Gujarat Branch",
            duration: "June 2020 - July 2022",
            designation: "Associate Member",
            location: "Gandhinagar",
            content: (
                <>
                    <li>
                        Worked as an Associate Member for liaison purposes
                        during 2021 as an NCC cadet.
                    </li>
                    <li>
                        • Managed and assisted in impactful workshops, including
                        a Menstrual Hygiene Campaign across five zones in
                        Ahmedabad.
                    </li>
                </>
            ),
        },
        {
            title: "National Cadet Corps (NCC)",
            duration: "June 2020 - July 2022",
            designation: "Cadet",
            location: "Ahmedabad",
            content: (
                <>
                    <li>
                        Earned an ‘A’ grade in the B-Certificate examination
                        (2021–2022)
                    </li>
                    <li>
                        Selected for the SSB Capsule Camp by the Gujarat
                        Directorate (2020–2021).
                    </li>
                </>
            ),
        },
    ],
};
