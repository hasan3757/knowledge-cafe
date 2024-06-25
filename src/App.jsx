import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]); 
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookMark = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove
    // console.log('remove', id)
    const remainingBookMark = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remainingBookMark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
