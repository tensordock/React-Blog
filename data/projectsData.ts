interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Instant Virtual Machines',
    description: `Deploy virtual machines in seconds.`,
    imgSrc: '/static/images/futuristicTee.png',
    href: 'https://dashboard.tensordock.com/deploy_preconfig',
  },
]

export default projectsData
