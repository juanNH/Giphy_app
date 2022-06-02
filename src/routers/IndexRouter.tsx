import { Route, Routes } from "react-router-dom";
import { GifsPage, HomePage, NotFoundPage, StickersPage } from "../pages";

export const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gifs" element={<GifsPage />} />
      <Route path="/stickers" element={<StickersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
