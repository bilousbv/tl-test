import { useNavigate } from 'react-router-dom';
import Button from '../../../Common/Button';

import './index.scss';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, the page you visited does not exist.</p>
      <Button type="primary" onClick={backHome}>
        Back Home
      </Button>
    </div>
  );
};

export default NotFound;
