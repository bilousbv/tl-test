import Layout from '../../../components/Layout/Simple';
import Content from '../../../components/Pages/Errors/NotFound';
import { displayName } from '../../../config';

const NotFound = (): JSX.Element => {
  document.title = `${displayName}: Not Found`;

  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default NotFound;
