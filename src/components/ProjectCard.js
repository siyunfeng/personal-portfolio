import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  const { title, intro, imgUrl } = props;
  return (
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
  );
};

export default ProjectCard;
