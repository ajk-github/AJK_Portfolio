import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")

  // const isMobile = window.innerWidth <= 400; // Adjust 768px as needed for your definition of 'mobile'
  // const asciiArt = isMobile ? command.ascii.mobileascii : command.ascii.desktopascii;


  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    } 
  let eleToPush = `<pre>${bannerString}</pre>`;
  banner.push(eleToPush);
  });  


  banner.push("<br>");
  banner.push("Welcome to AJKShell v1.0.0");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  // banner.push(`Type <span class='command'>'social'</span> to Connect on LinkedIn click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
