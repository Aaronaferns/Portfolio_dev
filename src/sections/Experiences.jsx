import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { useTheme } from "../ThemeContext";

const Experiences = ({id}) => {
  const { isBright } = useTheme();
  const reversedExperiences = [...experiences].reverse();
  
  return (
    <section id={id} className="w-full bg-transparent py-20 px-6">
      <div className="w-full">
        <Timeline data={reversedExperiences} />
      </div>
    </section>  
  );
};

export default Experiences;
