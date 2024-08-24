import { ArrivalIcon, AccommodationIcon, MealsIcon, GroupIcon } from "../icons";

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

  const iconMap: Record<string, React.ReactNode> = {
    accommodation: <AccommodationIcon />,
    meals: <MealsIcon />,
    welcome: <GroupIcon />,
    arrival_transfer: <ArrivalIcon />,
  };

  return (
    <div className="flex gap-2 items-center">
      <div className="p-[11px]">{iconMap[name]}</div>

      <div className="flex flex-wrap items-center gap-1">
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
