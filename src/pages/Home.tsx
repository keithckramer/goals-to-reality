import React, { useState } from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div>
      <h1>Welcome to Goal to Realjkjkkkity</h1>
      <Button onClick={toggleForm} label={showForm ? 'Close Goal Form' : 'Create a Goal'} />

      {showForm && (
        <form>
          <label>
            Goal Name:
            <input type="text" placeholder="Enter your goal" />
          </label>
          <br />
          <label>
            Description:
            <textarea placeholder="Enter a description"></textarea>
          </label>
          <br />
          <Button onClick={() => {}} label="Save Goal" type="submit" />
        </form>
      )}
    </div>
  );
};

export default Home;

