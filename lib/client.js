const sanityClient = require('@sanity/client')
const imageUrlBuilder = require("@sanity/image-url");
export const client = sanityClient({
  projectId: "o0xwmn6v",
  dataset: "productions",
  apiVersion: "2022-09-01",
  useCdn: true,
  token:
    "skXRev8Knq5qvY4MuwueevVlTgJqbHo2gxCEIc9KOkwj3kCMbpR3C5A7D9JuHIL8ezocMTJr0qCqtKEZsPh1JfneQdhKCjYFHTwEuJhkop5ARfuFiMO1qR4Qv0s8zeceQDuTSzS1FWmn49gQkYJ1e90DSYTuDeEGC5I5bIL4l8mooqqck6tj",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
// const urlFor = (source) => builder.image(source);
// import urlFor from './urlFor';
