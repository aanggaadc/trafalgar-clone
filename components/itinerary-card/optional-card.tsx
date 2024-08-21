import { ChecklistIcon } from "../icons";

const OptionalCard = () => {
  return (
    <div className="relative w-full rounded-md border border-[#e6e6e6] overflow-hidden lg:rounded-lg">
      <div className="absolute m-2 z-[2] py-1 px-2 rounded bg-[#503454] font-noto-sans text-sm leading-4 font-bold text-white">
        Iconic Experience
      </div>
      <div className="w-full aspect-[309/154] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          alt="Vatican Museums Gallery Maps"
          src="https://www.trafalgar.com/media/vf0plu0w/vatican-museums-gallery-maps-vatican-city-italy-1.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=800&height=450&quality=80"
        />
      </div>

      <div className="p-4">
        <p className="font-source-serif font-bold text-gray text-sm mb-2">
          Study the Masterpieces of the Vatican Museums
        </p>

        <p className="font-noto-sans text-sm text-light-gray">
          Be inspired by the magnificence of Michelangelo and da Vinci at the
          Vatican Museums.
        </p>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2">
          <ChecklistIcon className="fill-[#503454]" />
          <span className="text-[#503454] text-xs font-bold font-noto-sans">
            Included with trip
          </span>
        </div>
      </div>
    </div>
  );
};

export default OptionalCard;
