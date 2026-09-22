import AppNavigation from "./AppNavigation";
import NameFooter from "./NameFooter";

interface MainSectionProps {
  children: React.ReactNode;
  name: string;
}

function MainSection({ children, name }: MainSectionProps) {
  return (
    <div className="flex flex-col items-center justify-items-start overflow-y-auto scrollbar-none">
      <div className="flex flex-col items-center w-90/100">
        <AppNavigation />

        <div className="bg-[#73B48C] m-5 place-self-stretch h-full rounded-3xl shadow-xl/30 flex flex-col">
          <p className=" text-4xl m-2 text-white text-shadow-lg font-oleo-script text-center">
            {name}
          </p>

          <div
            className={"bg-[#DDF9E7] place-self-stretch h-full rounded-3xl p-4"}
          >
            {children}
          </div>
        </div>

        <NameFooter />
      </div>
    </div>
  );
}

export default MainSection;
