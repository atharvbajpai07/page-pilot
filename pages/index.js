import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import withAuth from '../utils/withAuth';
import { deleteLandingPage } from '../store/slices/landingPageSlice';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const landingPages = useSelector((state) => state.landingPages.pages);

  const handleDelete = (id) => {
    dispatch(deleteLandingPage(id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Landing Pages</h1>
      <ul className={styles.pageList}>
        {landingPages.map((page) => (
          <li key={page.id} className={styles.pageItem}>
            <div className={styles.pageDetails}>
              <span className={styles.pageTitle}>{page.title}</span>
              <div className={styles.pageActions}>
                <Link href={`/edit/${page.id}`}>
                  <button className={styles.button}>Edit</button>
                </Link>
                <Link href={`/view/${page.id}`}>
                  <button className={styles.button}>View</button>
                </Link>
                <button className={styles.button} onClick={() => handleDelete(page.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/create">
        <button className={styles.createButton}>Create New Landing Page</button>
      </Link>
    </div>
  );
};

export default withAuth(Dashboard);
