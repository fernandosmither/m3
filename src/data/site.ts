export const site = {
  name: 'M3',
  longName: 'Mentorless Match',
  title: 'M3 · Mentorless Match',
  description:
    'A salary-matched, part-time fellowship for senior security professionals moving into AI security. A paid month to build, up to two more for the strongest work. You set the direction.',
  // Replace with the final application form URL before release.
  applyUrl: 'https://tally.so/r/REEMPLAZAR',
  email: 'hello@m3.org',
  year: 2026,
};

export const emailDisplay = site.email.replace('@', '(A)').toUpperCase();

export const nav = [
  { label: 'Program', href: '/program', tone: 'ink' },
  { label: 'Focus', href: '/focus', tone: 'ink' },
  { label: 'Apply', href: site.applyUrl, tone: 'c1', external: true },
];

export const statement = [
  'A SALARY-MATCHED FELLOWSHIP FOR SENIOR SECURITY PEOPLE',
  'MOVING INTO AI SECURITY. ONE PAID MONTH, UP TO TWO MORE.',
  'NO MENTORS. YOU SET THE DIRECTION.',
];

/**
 * Social proof strip. The caption lives here; the logo artwork itself is
 * listed in `data/logos.ts` and rendered as images by Marquee.astro.
 */
export const proof = {
  /** Leave empty to show the strip without a caption. */
  label: 'Past AISB participants have been affiliated with',
};

/**
 * Footer credit line. Rendered part by part in Footer.astro: entries with an
 * `href` become links, the rest is plain text.
 */
export const legal = [
  { text: `(C)${site.year} - A COLLABORATION BETWEEN ` },
  { text: 'CONSTELLATION', href: 'https://constellation.org/' },
  { text: ', ' },
  { text: 'KAIROS', href: 'https://kairos-project.org/' },
  { text: ' AND ' },
  { text: 'AISB', href: 'https://aisb.dev/' },
];

export const program = {
  title: 'Program · M3',
  eyebrow: 'WE ARE PART-TIME BY DESIGN',
  headline: 'A week in London to find the problem, then a paid month to build it.',
  sections: [
    {
      n: '(1)',
      title: 'Week one',
      paragraphs: [
        '[[A week in person in London]]. Mornings are research blocks: you read the field and write down what is missing.',
        'Afternoons are discussion sprints. You bring a hypothesis and a small group tries to break it, with field experts there to red-team the parts you cannot see.',
        'Themed days cover governance, treaty verification, field building, infrastructure security and agent security. Then a [[wildcard day]]: yours, to go deep wherever you found you fit best.',
        'On the last in-person day you present what you plan to build, and the cohort gives you feedback before the month starts.',
      ],
    },
    {
      n: '(2)',
      title: 'Build phase',
      paragraphs: [
        '[[One month remote]], alongside your job. You commit up to ten hours a week to your own project and you get paid for them, [[up to $100 an hour]].',
        'A weekly standup with three peers and one facilitator keeps the accountability tight. Nobody directs your work.',
        'The month ends on demo day, the last Friday.',
      ],
    },
    {
      n: '(3)',
      title: 'Demo day',
      paragraphs: [
        'You present what you built to the cohort and to the people who can move it forward.',
        'Papers get routed to workshops and arXiv referrals, tools go to the open source community, and new orgs get introductions to funders.',
      ],
    },
    {
      n: '(4)',
      title: 'Extension period',
      paragraphs: [
        'The strongest results earn [[up to two more paid months]] on the same terms.',
        'Same rate, same standup: enough time to turn a promising demo into something the field can use.',
      ],
    },
    {
      n: '(+)',
      title: 'The network',
      paragraphs: [
        'One of the biggest things you leave with. This iteration runs alongside [[AISB London]], in the same venue, so the fellows are in the room with you all week.',
        'AISB brings its own connections, [GovAI](https://www.governance.ai/) among them: governance researchers, fellows and alumni you can reach when the work needs them.',
      ],
    },
  ],
  stats: [
    { value: '1+2', unit: 'months' },
    { value: '10', unit: 'hrs/week cap' },
    { value: '$100', unit: '/hour cap' },
    { value: '6', unit: 'people' },
  ],
};

export const focus = {
  title: 'Focus · M3',
  eyebrow: 'WE ARE PROBLEM-FIRST',
  headline:
    'You pick the direction. These are the problems we think are most neglected relative to how much they matter.',
  areas: [
    { n: '01', label: 'Compute governance' },
    { n: '02', label: 'Inference verification' },
    { n: '03', label: 'Model attestation' },
    { n: '04', label: 'Hardware security' },
    { n: '05', label: 'Securing model weights' },
    { n: '06', label: 'Treaty verification' },
    { n: '07', label: 'Agent security' },
    { n: '08', label: 'Authorization against misuse' },
  ],
  sections: [
    {
      n: '(1)',
      title: 'Empirical or theoretical',
      paragraphs: [
        'Both count. A benchmark nobody had built and a harness that makes an existing claim testable are both outputs we can route onward.',
      ],
    },
    {
      n: '(2)',
      title: 'Off this list is fine',
      paragraphs: [
        'The list is where we think the gaps are. If you have spent a decade inside a problem we did not think to name, that is a better reason to work on it than anything written here.',
        'Bring it in week one and let the group try to break it.',
      ],
    },
  ],
};
