
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaCode size={40} className="mb-4" />,
    title: 'Web Development',
    description: 'High-quality web development services tailored to meet your business needs.',
  },
  {
    icon: <FaPaintBrush size={40} className="mb-4" />,
    title: 'Graphic Design',
    description: 'Creative graphic design solutions to elevate your brand’s visual identity.',
  },
  {
    icon: <FaChartLine size={40} className="mb-4" />,
    title: 'SEO Optimization',
    description: 'Optimize your website for search engines and increase organic traffic.',
  },
];

export default function Services() {
  return (
    <div id='services' className="services-section py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="section-title mb-12"><span className="highlight">O</span>ur Services</h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card">
              <div className="icon-container">
                <div className="icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
