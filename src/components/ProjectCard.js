import { Col } from 'react-bootstrap';
import ProjectDetailCard from './ProjectDetailCard';

const ProjectCard = ({ title, description, imgUrl, githubUrl, websiteUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-link-box'>
            <a href={websiteUrl} target={`_blank`}>
              Website
            </a>
            <a href={githubUrl} target={`_blank`}>
              GitHub
            </a>
          </div>
          <div className='proj-details'>
            <a href={ProjectDetailCard}>
              <button className='proj-details-button'>More Details</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
