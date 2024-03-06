// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
// normalize CSS across browsers
import "./src/normalize.css";
// custom CSS styles
import "./src/style.css";

// Highlighting for code blocks
import "prismjs/themes/prism.css";

export const onServiceWorkerUpdateReady = () => {
  console.log("something happening here");
  const answer = window.confirm(
    `Une nouvelle version est disponible ! ` +
      `Souhaitez-vous mettre à jour avec la nouvelle version ?`,
  );

  if (answer === true) {
    window.location.reload();
  }
};

export const onRouteUpdate = () => {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    reg.update();
  });
};
