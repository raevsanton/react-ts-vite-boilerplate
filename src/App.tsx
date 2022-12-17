import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Starter Boilerplate</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
