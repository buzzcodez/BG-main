// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 fixed bottom-0">
      Made with ❤️ by{' '}
      <a
        href="https://www.linkedin.com/in/vartikasinghp"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        Vartika Singh
      </a>
    </footer>
  );
};

export default Footer;
