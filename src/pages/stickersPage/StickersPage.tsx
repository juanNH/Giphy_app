import { Sticker } from "../../components/commons";
import { useStickers } from "../../hooks";
import { GeneralGifsAddaptedInterface } from "../../models/gifs/addaptedGeneralGifs";

export const StickersPage = () => {
  const { generalStickers: stickers } = useStickers();

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
