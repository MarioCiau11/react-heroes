import { Route, Routes } from 'react-router-dom';
import HeroList from '../components/HeroList';
import { HeroDetail } from '../components/HeroDetail';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroList />} />
      <Route path="/hero/create" element={<HeroDetail />} />
      <Route path="/hero/:id/edit" element={<HeroDetail />} />
    </Routes>
  );
};
