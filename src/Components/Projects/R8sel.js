import rating from './Images/rating.png';
import rating2 from './Images/rating2.png';
import rating3 from './Images/rating3.png';
import { Container } from 'react-bootstrap';


function ControlledCarousel(props) {
  const index = props.index;

  return (
    <Container className='projectIntro'>
     <h5>Created using:</h5>
     <div className="imgBox">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" className="homeBodyImg" width="35px" />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" className="homeBodyImg JSLogo" width="35px" />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS" className="homeBodyImg" width="35px" />
     </div>
     {index === 0 ? 
     <Container>
     <img src={rating} alt="rating application initial page" className="projectImg" />
     <div className="projectSummary">
       <p className="carText">A React group project dummy social media site. Users could input data into a form and then they would be "posted" onto the feed below while notified by a toastr notification. Users could rate up or down the posts. Posts would be stored in local storage, allowing them to remain when the page was left and returned to.</p>
     </div>
     </Container> : null}
     {index === 1 ? <Container>
     <img src={rating2} alt="rating app second page" className="projectImg" />
     <div className="projectSummary">
       <p className='carText'>Showcasing the form where we would input data to function as a post.</p>
     </div>
     </Container> : null}
     {index === 2 ? <Container>
     <img src={rating3} alt="rating app final page" className="projectImg" />
     <div className="projectSummary">
       <p className='carText'>
       Showcasing a post and the toastr notification, posts would also be able to be rated up or down by users and the rating would be displayed on the post.
       </p>
     </div>
     </Container> : null}
   </Container>
  );
}

export default ControlledCarousel;