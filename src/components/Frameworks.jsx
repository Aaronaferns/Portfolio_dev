import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "deek-seek.webp",
    "docling.webp",
    "ollama.png",
    "openai.webp",
    "pytorch.png",
    "scikit.webp",
    "TensorFlow.webp",
    "llamaindex.webp",
    "gymnasium.webp",
    "jupyter.webp",
    "opencv.png",
    "C++.webp",
    "pytnon.webp",
    "gcp.png",
    "docker.webp",
    "spark.webp",
    "pandas.webp",
    "react.svg"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/ai-logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/ai-logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
