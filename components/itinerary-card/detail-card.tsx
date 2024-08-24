import { ArrivalIcon } from "../icons";

export interface DetailCardProps {
  name: string;
  description: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ name, description }) => {
  const nameMap: Record<string, string> = {
    accommodation: "Accommodation",
    meals: "Included Meals",
    welcome: "Welcome",
    arrival_transfer: "Arrival Transfer",
  };

  return (
    <div className="flex gap-2">
      <ArrivalIcon />

      <div className="flex flex-col gap-1 lg:flex-row">
        <p className="font-semibold text-gray text-sm font-noto-sans lg:text-base">
          {nameMap[name]}
        </p>
        <p className="text-dark text-light-gray text-sm font-noto-sans lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
