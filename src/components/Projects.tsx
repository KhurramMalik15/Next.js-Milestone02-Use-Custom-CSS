import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: '"A clean, minimalist personal portfolio website created to showcase my skills and projects. Built with HTML and CSS, it includes interactive elements and an easy-to-navigate layout."',
    image: '../images/portfolio-website.png',
    link: 'https://portfolio-website-silk-nine-71.vercel.app/',
  },
  {
    title: 'Jenkinson-Sea-Life Website',
    description: '"A fully responsive e-commerce website with a user-friendly interface, built with Next.js and custom CSS. Integrated product filtering, search functionality, and a simple checkout process to enhance the user experience."',
    image: '../images/jenkinson-SEA-Website.png',
    link: 'https://jenkinson-sea-life.vercel.app/',
  },
  {
    title: 'Fetch Car Model',
    description: '"A simple web application that fetches and displays real-time car data from an external API. Built using JavaScript and Fetch API to retrieve car specifications, pricing, and availability, providing users with up-to-date information on various car models."',
    image: '../images/car-data.png',
    link: '#',
  },
  {
    title: 'Furniture Website',
    description: '"A fully responsive Furniture website with a user-friendly interface, built with Next.js and custom CSS. Integrated product filtering, search functionality, and a simple checkout process to enhance the user experience."',
    image: '../images/furniture-website-clone.png',
    link: 'https://furniture-website-clone.vercel.app/',
  },
  {
    title: 'Student Record Management',
    description: '"A web-based student management system to keep track of student information, including enrollment, grades, and attendance. Built with HTML, CSS, and JavaScript for an easy-to-use interface. Features include data storage, sorting, and easy retrieval of student details."',
    image: '../images/Student-record.png',
    link: 'https://student-record-management.vercel.app/',
  },
  {
    title: 'Umberellas Website',
    description: '"A fully responsive Umberellas website with a user-friendly interface, built with Next.js and custom CSS. Integrated product filtering, search functionality, and a simple checkout process to enhance the user experience."',
    image: '../images/Umberellas-website.png',
    link: '#',
  },
];

export default function Projects() {
  return (
    <div id="projects" className={styles.projectsContainer}>
      <div className="container mx-auto max-w-4xl">
        <h2 className={styles.projectsTitle}>
          <span className="text-red-900">O</span>ur Projects
        </h2>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${index % 2 === 0 ? '' : styles.projectCardReverse}`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            {/* Project Content */}
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? styles.projectContentLeft : ''}`}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectButton}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
