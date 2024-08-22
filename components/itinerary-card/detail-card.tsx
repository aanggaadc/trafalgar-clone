import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage, KeyTextField } from "@prismicio/client";

export interface DetailCardProps {
  name: KeyTextField | undefined;
  description: KeyTextField | undefined;
  icon: ImageFieldImage | undefined;
}

const DetailCard: React.FC<DetailCardProps> = ({ name, description, icon }) => {
  return (
    <div className="flex gap-2">
      <div className="flex-none w-[40px] h-[36px] overflow-hidden">
        <PrismicNextImage
          field={icon}
          className="w-[70%] h-[70%] object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-1 lg:flex-row">
        <p className="font-semibold text-gray text-sm font-noto-sans lg:text-base">
          {name}
        </p>
        <p className="text-dark text-light-gray text-sm font-noto-sans lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
