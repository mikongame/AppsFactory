import './Notfound.css';
import IMG from '../../../entorno/img';

const Notfound = () => {
  return (
    <div className="text-center mt-4">
      <img src={`${IMG}/sinbotella.jpg`} alt="404" className="img-fluid" />
    </div>
  );
};

export default Notfound;
