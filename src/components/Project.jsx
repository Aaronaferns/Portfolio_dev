import { useTheme } from "../ThemeContext";

const Project = ({
  title,
  intro,
  videoLeft,
  videoRight,
  results,
  architecture,
  demoLink,
}) => {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme();
  const getEmbedUrl = (url) => {
    if (!url) return null;

    try {
      const urlObj = new URL(url);
      let videoId = "";

      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1); // remove leading "/"
      } else if (
        urlObj.hostname === "www.youtube.com" ||
        urlObj.hostname === "youtube.com"
      ) {
        videoId = urlObj.searchParams.get("v");
      }

      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1` : null;
    } catch {
      return null;
    }
  };

  const embedUrlLeft = getEmbedUrl(videoLeft);
  const embedUrlRight=getEmbedUrl(videoRight);


  return (
    <div className={`w-full px-4 py-8 max-w-7xl mx-auto space-y-12 ${
      isBright 
        ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-8' 
        : 'bg-black/15 backdrop-blur-sm rounded-2xl p-8'
    }`}>
      {/* Title & Intro */}
      <h1 className={`text-4xl font-bold text-center ${mainTextColor}`}>{title}</h1>
      <p className={`text-lg text-center max-w-3xl mx-auto ${secondaryTextColor}`}>{intro}</p>

      {/* YouTube Video Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
        <div>
        {embedUrlLeft ? (
          <iframe
            src={embedUrlLeft}
            width="560"
            height="315"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <p>Invalid video URL</p>
        )}
        </div>
        <div>
        {embedUrlRight ? (
          <iframe
            src={embedUrlRight}
            width="560"
            height="315"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <p>Invalid video URL</p>
        )}
        </div>
      </div>

      {/* Results */}
      <section>
        <h2 className={`text-2xl font-semibold mb-2 ${mainTextColor}`}>Results</h2>
        <p className={secondaryTextColor}>{results}</p>
      </section>

      {/* Architecture */}
      <section>
        <h2 className={`text-2xl font-semibold mb-2 ${mainTextColor}`}>Architecture</h2>
        <p className={secondaryTextColor}>{architecture}</p>
      </section>

      {/* Demo (optional) */}
      {demoLink && (
        <section>
          <h2 className={`text-2xl font-semibold mb-2 ${mainTextColor}`}>Live Demo</h2>
          <iframe
            src={demoLink}
            className="w-full h-[500px] rounded-lg border"
            title="Live Demo"
          />
        </section>
      )}
    </div>
  );
};


export default Project;






// const Project = ({ videoLeft }) => {
//   // Helper to convert short or normal YouTube URLs to embed URLs
//   const getEmbedUrl = (url) => {
//     if (!url) return null;

//     try {
//       const urlObj = new URL(url);
//       let videoId = "";

//       if (urlObj.hostname === "youtu.be") {
//         videoId = urlObj.pathname.slice(1); // remove leading "/"
//       } else if (
//         urlObj.hostname === "www.youtube.com" ||
//         urlObj.hostname === "youtube.com"
//       ) {
//         videoId = urlObj.searchParams.get("v");
//       }

//       return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
//     } catch {
//       return null;
//     }
//   };

//   const embedUrlLeft = getEmbedUrl(videoLeft);
//   const embedUrlRight=getEmbedUrl(videoRight);

//   return (
//     <div>
//     <div>
//       {embedUrl ? (
//         <iframe
//           src={embedUrl}
//           width="560"
//           height="315"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           loading="lazy"
//         />
//       ) : (
//         <p>Invalid video URL</p>
//       )}
//     </div>
//     <div>
//       {embedUrl ? (
//         <iframe
//           src={embedUrl}
//           width="560"
//           height="315"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           loading="lazy"
//         />
//       ) : (
//         <p>Invalid video URL</p>
//       )}
//     </div>
    
//     </div>
//   );
// };



// export default Project;