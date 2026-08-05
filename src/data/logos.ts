/**
 * Logo artwork for the social proof strip, in the order it runs in the marquee.
 *
 * `src` is the path inside `public/`, without the base prefix: Marquee.astro
 * prepends `import.meta.env.BASE_URL` so the strip survives the `/m3` base.
 *
 * The files are the originals from aisb.dev, drawn dark-on-light. Marquee.astro
 * inverts them in CSS rather than shipping a second set of assets.
 */
export const proofLogos: { src: string; alt: string }[] = [
  { src: '/logos/aws.svg', alt: 'Amazon Web Services (AWS)' },
  { src: '/logos/apollo-research.svg', alt: 'Apollo Research' },
  { src: '/logos/apple.svg', alt: 'Apple' },
  { src: '/logos/cern.svg', alt: 'CERN' },
  { src: '/logos/epoch-ai.svg', alt: 'Epoch AI' },
  { src: '/logos/fgv.svg', alt: 'Fundação Getulio Vargas (FGV)' },
  { src: '/logos/fraunhofer-gesellschaft.svg', alt: 'Fraunhofer-Gesellschaft' },
  { src: '/logos/georgia-tech.svg', alt: 'Georgia Institute of Technology' },
  { src: '/logos/google.svg', alt: 'Google' },
  { src: '/logos/university-of-helsinki.svg', alt: 'University of Helsinki' },
  { src: '/logos/insa-lyon.svg', alt: 'INSA Lyon' },
  { src: '/logos/jane-street.svg', alt: 'Jane Street' },
  { src: '/logos/kings-college-london.svg', alt: "King's College London" },
  { src: '/logos/meta.svg', alt: 'Meta' },
  { src: '/logos/microsoft.svg', alt: 'Microsoft' },
  { src: '/logos/openai.svg', alt: 'OpenAI' },
  { src: '/logos/safer-ai.svg', alt: 'Safer AI' },
  { src: '/logos/santa-fe-institute.svg', alt: 'Santa Fe Institute' },
  { src: '/logos/stanford-university.svg', alt: 'Stanford University' },
  { src: '/logos/uc-san-diego.svg', alt: 'University of California, San Diego' },
  { src: '/logos/university-of-bologna.svg', alt: 'Alma Mater Studiorum: Università di Bologna' },
  { src: '/logos/university-of-oxford.svg', alt: 'University of Oxford' },
  { src: '/logos/university-of-washington.svg', alt: 'University of Washington' },
];
