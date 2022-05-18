import { Route, Routes } from "react-router-dom";
import { AboutPage, GifsPage, HomePage, StickersPage } from "../pages";

export const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gifs" element={<GifsPage />} />
      <Route path="/stickers" element={<StickersPage />} />
    </Routes>
  );
};
