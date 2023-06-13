import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  const { title, intro, imgUrl } = props;
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span className='proj-intro'>{intro}</span>
          <Link to={`/projects/${title}`}>
            <div className='proj-details'>
              <button className='proj-details-button'>More Details</button>
            </div>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
