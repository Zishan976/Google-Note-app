const noteKey = "reactNote";

export const getLocalStorage = () => {
  const rawNote = localStorage.getItem(noteKey);
  if (!rawNote || rawNote === "undefined") return [];
  try {
    return JSON.parse(rawNote);
  } catch (e) {
    return [];
  }
};

export const setLocalStorage = (contents) => {
  return localStorage.setItem(noteKey, JSON.stringify(contents));
};
