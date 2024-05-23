import { useState } from 'react';
import styles from '../styles/LandingPageForm.module.css';

const LandingPageForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a landing page object with title, description, and predefined components
    const landingPage = {
      title,
      description,
      components: [
        { type: 'header', content: 'Header' },
        { type: 'footer', content: 'Footer' },
        { type: 'textBlock', content: 'Text Block' },
        { type: 'image', url: 'https://example.com/image.jpg' },
      ],
    };
    onSubmit(landingPage);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.button}>Create Landing Page</button>
    </form>
  );
};

export default LandingPageForm;
