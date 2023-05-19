import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, githubUrl, websiteUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-link-box'>
            <a href={githubUrl}>GitHub</a>
            <a href={websiteUrl}>Website</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
