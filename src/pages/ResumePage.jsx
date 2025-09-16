// ResumePage.jsx
import React from 'react';

const ResumePage = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="/ResumeAaronFernandes.pdf"
        style={styles.iframe}
        title="Resume"
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    boxSizing: 'border-box',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    boxShadow: '0 0 10px rgba(119, 170, 190, 0.1)',
   
  },
};

export default ResumePage;
