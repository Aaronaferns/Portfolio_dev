import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = ({id}) => {
  const reversedExperiences = [...experiences].reverse();
  return (
    <section id = {id} className="w-full bg-trasparent py-20 px-6">
    <div className="w-full">
      <Timeline data={reversedExperiences} />
    </div>
    </section>  
  );
};

export default Experiences;
