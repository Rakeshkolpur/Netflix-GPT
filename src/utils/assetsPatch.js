// // utils.js
// export const getImageURL = (path) => {
//     return new URL(`/assets/${path}`, import.meta.url).href;
//   };
export const getImageURL = (path) => {
    return `/assets/${path}`;
  };
  