import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MarkdownViewer.module.css';

const MarkdownViewer = ({ content = '' }) => {
  return (
    <div className={`${styles.markdownContainer} ${styles.test}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;