export const site = {
  name: 'M3',
  longName: 'Mentorless Match',
  title: 'M3 · Mentorless Match',
  description:
    'A three-month, part-time fellowship for senior security professionals moving into AI security, paid to match your salary. You set the direction.',
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
  'A THREE-MONTH, SALARY-MATCHED FELLOWSHIP FOR SENIOR',
  'SECURITY PEOPLE MOVING INTO AI SECURITY.',
  'NO MENTORS. YOU SET THE DIRECTION.',
];

/**
 * Social proof strip. These are set by the client: the component only renders
 * what is listed here. Names render as type, not as third-party logo artwork.
 */
export const proof = {
  /** Leave empty to show the strip without a caption. */
  label: '',
  logos: ['DeepMind', 'Anthropic', 'OpenAI', 'SASH'],
};

export const legal = {
  before: `(C)${site.year} - A `,
  link: { label: 'GENERATOR RESIDENCY', href: 'https://generatorresidency.org/' },
  after: ' PROJECT',
};

export const program = {
  title: 'Program · M3',
  eyebrow: 'WE ARE PART-TIME BY DESIGN',
  headline: 'A week in London to find the problem, then three paid months to work on it.',
  sections: [
    {
      n: '(1)',
      title: 'Week one',
      paragraphs: [
        '[[A week in person in London]]. Mornings are research blocks: you read the field and write down what is missing.',
        'Afternoons are discussion sprints. You bring a hypothesis and a small group tries to break it, with field experts there to red-team the parts you cannot see.',
        'Themed days cover governance, treaty verification, field building, infrastructure security and agent security. The cohort votes on a wildcard day.',
      ],
    },
    {
      n: '(2)',
      title: 'Build phase',
      paragraphs: [
        '[[Three months remote]], alongside your job. You commit between ten and forty hours a week to your own project and you get paid for them, [[up to $100 an hour]].',
        'A weekly standup with three peers and one facilitator keeps the accountability tight. Nobody directs your work.',
        'Month one goes to research, month two to preliminary results, and by month three you decide what the work becomes.',
      ],
    },
    {
      n: '(3)',
      title: 'Demo day',
      paragraphs: [
        'You present what you built to the cohort and to the people who can move it forward.',
        'Papers get routed to workshops and arXiv referrals, tools go to the open source community, and new orgs get introductions to funders.',
        'Projects that need more time [[can extend by two paid months]].',
      ],
    },
  ],
  stats: [
    { value: '3', unit: 'months' },
    { value: '10-40', unit: 'hrs/week' },
    { value: '$100', unit: '/hour cap' },
    { value: '6', unit: 'people, first cohort' },
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
        'A survey of work other people already did does not count.',
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
