import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addLandingPage } from '../../store/slices/landingPageSlice';
import withAuth from '../../utils/withAuth';

const EditLandingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const landingPages = useSelector(state => state.landingPages.landingPages);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const page = landingPages.find(page => page.id === parseInt(id));
    if (page) {
      setTitle(page.title);
      setDescription(page.description);
      setComponents(page.components);
    }
  }, [id, landingPages]);

  const handleSave = () => {
    const updatedPage = {
      id: parseInt(id),
      title,
      description,
      components
    };
    dispatch(addLandingPage(updatedPage));
    router.push('/');
  };

  const handleAddComponent = (type) => {
    setComponents([...components, { type, content: '' }]);
  };

  const handleRemoveComponent = (index) => {
    const newComponents = components.filter((_, i) => i !== index);
    setComponents(newComponents);
  };

  const handleComponentChange = (index, content) => {
    const newComponents = components.map((component, i) => {
      if (i === index) {
        return { ...component, content };
      }
      return component;
    });
    setComponents(newComponents);
  };

  return (
    <div>
      <h1>Edit Landing Page</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <h2>Components</h2>
          {components.map((component, index) => (
            <div key={index}>
              <label>{component.type}</label>
              <input
                type="text"
                value={component.content}
                onChange={(e) => handleComponentChange(index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveComponent(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddComponent('Header')}>Add Header</button>
          <button type="button" onClick={() => handleAddComponent('Text Block')}>Add Text Block</button>
          <button type="button" onClick={() => handleAddComponent('Image Block')}>Add Image Block</button>
          <button type="button" onClick={() => handleAddComponent('Footer')}>Add Footer</button>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default withAuth(EditLandingPage);
