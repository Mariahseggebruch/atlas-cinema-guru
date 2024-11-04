import { Title } from '@/lib/definitions';
import React from 'react';

interface HomePageProps {
  titles: Title[];
}

const HomePage: React.FC<HomePageProps> = ({ titles }) => {
  return (
    <div>
      {/* Render titles here */}
      {Array.isArray(titles) ? (
        titles.map((title) => (
          <div key={title.id}>{title.title}</div>
        ))
      ) : (
        <p>No titles available</p>
      )}
    </div>
  );
};

export default HomePage;
