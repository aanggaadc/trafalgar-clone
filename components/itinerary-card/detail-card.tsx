import { detailIconMap, detailNameMap } from ".";

export interface DetailCardProps {
  name: string;
  description: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ name, description }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-[11px]">{detailIconMap[name]}</div>

      <div className="flex flex-wrap items-center gap-1">
        <p className="font-semibold text-gray text-sm font-noto-sans lg:text-base">
          {detailNameMap[name]}
        </p>
        <p className="text-dark text-light-gray text-sm font-noto-sans lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
