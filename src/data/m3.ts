export const nav = [
  { label: "Program", href: "#program" },
  { label: "Problems", href: "#problems" },
  { label: "Scope", href: "#scope" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
];

export const hero = {
  headline: "Move into AI security.",
  sub: "A three-month, salary-matched fellowship for senior security people. No mentors. You set the direction.",
  ctaLabel: "Apply by 27 Oct",
  ctaHref: "#apply",
};

export const affiliations = {
  label: "Past AISB participants have been affiliated with",
  logos: [
    { name: "Amazon Web Services", file: "amazon-web-services-aws.svg" },
    { name: "Apollo Research", file: "apollo-research.svg" },
    { name: "Apple", file: "apple.svg" },
    { name: "CERN", file: "cern.svg" },
    { name: "Epoch AI", file: "epoch-ai.svg" },
    { name: "FGV", file: "fgv.png" },
    { name: "Fraunhofer-Gesellschaft", file: "fraunhofer-gesellschaft.svg" },
    { name: "Georgia Tech", file: "georgia-institute-of-technology.svg" },
    { name: "Google", file: "google.svg" },
    { name: "University of Helsinki", file: "university-of-helsinki.svg" },
    { name: "INSA Lyon", file: "insa-lyon.svg" },
    { name: "Jane Street", file: "jane-street.svg" },
    { name: "King's College London", file: "kings-college-london.png" },
    { name: "Meta", file: "meta.svg" },
    { name: "Microsoft", file: "microsoft.svg" },
    { name: "OpenAI", file: "openai.svg" },
    { name: "Safer AI", file: "safer-ai.svg" },
    { name: "Santa Fe Institute", file: "santa-fe-institute.svg" },
    { name: "Stanford University", file: "stanford-university.svg" },
    { name: "UC San Diego", file: "university-of-california-san-diego.png" },
    { name: "Università di Bologna", file: "university-of-bologna.svg" },
    { name: "University of Oxford", file: "university-of-oxford.png" },
    { name: "University of Washington", file: "university-of-washington.png" },
  ],
};

export const lead =
  "A week in London to scope your project, then up to three paid months to work on it.";

export const stats = [
  { value: "1–3", unit: "months" },
  { value: "10", unit: "hrs/week" },
  { value: "$100", unit: "/hour cap" },
  { value: "6", unit: "people" },
];

/**
 * Draft week/month tags pending a real schedule — worth a read-through
 * before this goes live.
 */
export const timeline = [
  {
    id: "week-one",
    title: "Week one",
    when: "week 1 · London",
    body: "In person. Mornings are research blocks: you read the field and write down what is missing. Afternoons are discussion sprints, with field experts there to red-team the parts you cannot see.",
  },
  {
    id: "build",
    title: "Build",
    when: "weeks 2–5 · remote",
    body: "A paid month on your own project, alongside your job, at your rate up to $100 an hour. A weekly standup with three peers and one facilitator keeps the accountability tight. Nobody directs your work.",
  },
  {
    id: "demo-day",
    title: "Demo day",
    when: "week 6",
    body: "You present what you built to the cohort and to the people who can move it forward. Papers get routed to workshops and arXiv referrals, tools go to the open source community, and new orgs get introductions to funders.",
  },
  {
    id: "extension",
    title: "Extension",
    when: "months 2–3 · by invitation",
    body: "Promising projects get two more financed months to keep going — same rate, same cadence — and the same routing onward when the work is ready.",
  },
];

/**
 * Draft copy expanded from shorthand notes — worth a read-through before this
 * goes live.
 */
export const personas = {
  lead: "The fellowship is built for three people.",
  items: [
    {
      index: "1",
      role: "The researcher",
      summary: "You want to write the paper.",
      body: "You have a question the field has not answered, and three months is enough to answer it properly rather than in the margins of another job.",
    },
    {
      index: "2",
      role: "The founder",
      summary: "You see a gap worth an organisation.",
      body: "A non-profit that governments will need and nobody has built yet. You want the time to scope it, test whether it holds, and leave with something fundable.",
    },
    {
      index: "3",
      role: "The field builder",
      summary: "You want to bring more people in.",
      body: "You have spent years inside the area and the bottleneck you see is people, not ideas. You want to build the thing that widens the door.",
    },
  ],
  footnote: "Another project? We can host it.",
};

export const problems = {
  lead: "You pick the direction. These are the problems we think are most neglected relative to how much they matter.",
  items: [
    "Compute governance",
    "Inference verification",
    "Model attestation",
    "Hardware security",
    "Securing model weights",
    "Treaty verification",
    "Agent security",
    "Authorization against misuse",
  ],
};

export const notes = [
  {
    index: "1",
    title: "Empirical or theoretical",
    paragraphs: [
      "Both count. A benchmark nobody had built and a harness that makes an existing claim testable are both outputs we can route onward.",
      "A survey of work other people already did does not count.",
    ],
  },
  {
    index: "2",
    title: "Off this list is fine",
    paragraphs: [
      "The list is where we think the gaps are. If you have spent a decade inside a problem we did not think to name, that is a better reason to work on it than anything written here.",
      "Bring it in week one and let the group try to break it.",
    ],
  },
];

/**
 * Draft answers assembled from the copy elsewhere on this page — worth a
 * read-through before this goes live.
 */
export const faq = {
  lead: "Questions we get asked.",
  items: [
    {
      q: "How does the pay work?",
      a: "You are paid for the hours you put into your project, at your rate, capped at $100 an hour. The build phase starts with one paid month; projects that need more time can extend by two more.",
    },
    {
      q: "Do I have to quit my job?",
      a: "No. The build phase is remote and runs alongside your job — you decide how many hours to commit. The only in-person block is the first week, in London.",
    },
    {
      q: "Do I need a project going in?",
      a: "No. Week one exists to find it: mornings reading the field, afternoons letting a small group and field experts try to break your hypothesis. The problems list is where we think the gaps are, and off-list is fine.",
    },
    {
      q: "Who directs the work?",
      a: "Nobody. A weekly standup with three peers and one facilitator keeps the accountability tight, but the direction stays yours.",
    },
    {
      q: "What happens after demo day?",
      a: "Papers get routed to workshops and arXiv referrals, tools go to the open source community, and new orgs get introductions to funders. Projects that need more time can extend by two paid months.",
    },
    {
      q: "Who is behind M3?",
      a: "A collaboration between Constellation, Kairos and AISB. Anything this page does not answer: hello@m3.org.",
    },
  ],
};

export const footer = {
  headline: "Find a problem worth three months.",
  ctaLabel: "Apply by 27 Oct",
  ctaHref: "#apply",
  facts: ["A week in London", "Three months remote", "Salary matched"],
  legal: "© 2026 — A collaboration between Constellation, Kairos and AISB",
  email: "hello@m3.org",
};
