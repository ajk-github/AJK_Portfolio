const whoamiObj = {
  "message" : [
    [
      "Hi, I'm Abdul Jaleel Khan. Currently exploring the tech behind social media's impact ",
      "on wellness at DePaul University and a former tech engineer at Hewlett Packard Enterprise",
      "Download my CV to Dive deeper into my projects and skills. let's connect!"
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'> ~ AJK</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
