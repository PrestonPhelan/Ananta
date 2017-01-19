export const getDisplayName = name => {
  let displayName;
  let reg = /^.[a-z]*/;
  if (name.length > 10) {
    displayName = name.match(reg);
    if (displayName.length > 10) {
      displayName = displayName.slice(0, 7) + "...";
    }
  } else {
    displayName = name;
  }
  return displayName;
};
