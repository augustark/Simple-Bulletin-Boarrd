import { Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import Create from './components/Create'
import Article from './components/Article';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Main/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/articles/:id" element={<Article/>}/>
      </Routes>
    </div>
  );
}

export default App;
