import LandingPageForm from '../components/LandingPageForm';

const CreatePage = () => {
  const handleSubmit = (landingPage) => {
    // Handle submission (e.g., dispatch action to save landing page to Redux store or API)
    console.log('New Landing Page:', landingPage);
  };

  return (
    <div className="container">
      <h1>Create Landing Page</h1>
      <LandingPageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePage;
