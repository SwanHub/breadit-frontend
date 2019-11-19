import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import CommentsContainer from './components/CommentSection/CommentsContainer';

function App() {
  return (
    <>
      <div className="opening-face">
        <Header />
        <CommentsContainer />
      </div>
    </>
  );
}

export default App;
