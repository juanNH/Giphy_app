import { useEffect, useState } from "react";
import { Sticker } from "../../components/commons";
import { useStickers } from "../../hooks";
import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";
import { GeneralStickersAddaptedInterface } from "../../models/stickers/addaptedGeneralStickers";

export const StickersPage = () => {
  const [stickers, setStickers] =
    useState<GeneralStickersAddaptedInterface[]>();
  const { generalStickers } = useStickers();
  useEffect(() => {
    setStickers(generalStickers);
  }, [generalStickers]);
  return (
    <div>
      <div>
        {stickers?.map((sticker: GeneralGifsAddaptedInterface) => (
          <div key={sticker.id}>
            <Sticker url={sticker.url} title={sticker.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
