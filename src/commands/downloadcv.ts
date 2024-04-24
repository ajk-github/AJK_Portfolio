import command from '../../config.json' assert {type: 'json'};

const downloadCV = (): string[] => {
  const cvLink = command.cvUrl;
  const message = `<a href="${cvLink}" download="CV.pdf">Click to Download CV</a>`;
  return ["Initializing download...", "Contacting server...", message];
}

export const DOWNLOADCV = downloadCV();
