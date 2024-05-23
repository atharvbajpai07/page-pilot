import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLandingPage } from '../store/slices/landingPageSlice';
import { useRouter } from 'next/router';
import withAuth from '../utils/withAuth';
import styles from '../styles/CreateLandingPage.module.css';

const CreateLandingPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPage = {
      id: Date.now(),  // Simple unique ID generation
      title,
      description,
      components: []  // Empty array to start with
    };
    dispatch(addLandingPage(newPage));
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Create</button>
      </form>
    </div>
  );
};

export default withAuth(CreateLandingPage);
