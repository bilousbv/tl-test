import Layout from '../../components/Layout/Main';
import Content from '../../components/Pages/Home';
import { displayName } from '../../config';

const Home = (): JSX.Element => {
  document.title = `${displayName}: Home`;

  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Home;
