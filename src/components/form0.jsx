
import React, { useState } from 'react';

const Form0 = () => {
  const [Name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('Name').textContent = 'Hello ' + Name;
  };

  return (
    <div>
      <div>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name :</label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} /><br />
            <input type="submit" value="submit" />
          </form>
          <label id="Name" htmlFor="Name"></label>
        </fieldset>
      </div>
    </div>
  );
};

export default Form0;
