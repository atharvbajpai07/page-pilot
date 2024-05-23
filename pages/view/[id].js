import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withAuth from '../../utils/withAuth';

const ViewLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const landingPages = useSelector(state => state.landingPages.landingPages);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const foundPage = landingPages.find(page => page.id === parseInt(id));
    if (foundPage) {
      setPage(foundPage);
    }
  }, [id, landingPages]);

  if (!page) return <div>Loading...</div>;

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      {/* Render components dynamically */}
      {page.components.map((component, index) => (
        <div key={index}>
          {/* Placeholder for component rendering */}
          <p>{component.type}</p>
        </div>
      ))}
    </div>
  );
};

export default withAuth(ViewLandingPage);
