import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage, KeyTextField } from "@prismicio/client";

export interface DetailCardProps {
  name: KeyTextField;
  description: KeyTextField;
  icon: ImageFieldImage;
}

const DetailCard: React.FC<DetailCardProps> = ({ name, description, icon }) => {
  return (
    <div className="flex gap-2">
      <div className="w-[40px] h-[36px] overflow-hidden">
        <PrismicNextImage
          field={icon}
          className="w-full h-full object-cover object-center"
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
