import styles from './StarRating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StartRaiting = ({ rating, className }) => {
  const ratingInt = Math.floor(rating);
  const ratingFloat = rating - ratingInt;

  return(
    <>
      <span className={`${styles.starRating} ${className}`}>
      {
        ratingInt > 0 ? [...Array(5)].map((star, index) => {
          return (
            (index <= (ratingInt - 1)) ?
              <FontAwesomeIcon icon={faStar} key={index}/> : 
              (index === ratingInt && ratingFloat > 0.0) ? 
                <FontAwesomeIcon icon={faStarHalfStroke} key={index}/> :
                ''
          )
        }) : 'No Rating'
      }
      </span>
      <span>({rating?.toFixed(1)})</span>
    </>
  )
};

export default StartRaiting;