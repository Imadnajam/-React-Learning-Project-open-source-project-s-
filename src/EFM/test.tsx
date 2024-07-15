import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string;
}

// Create a functional component using the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Export the component
export default Greeting;
