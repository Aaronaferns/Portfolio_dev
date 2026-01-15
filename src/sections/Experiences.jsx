import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { useTheme } from "../ThemeContext";

const Experiences = ({id}) => {
  const { isBright } = useTheme();
  
  return (
    <section id={id} className="w-full bg-transparent py-20 px-6">
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
    </section>  
  );
};

export default Experiences;
