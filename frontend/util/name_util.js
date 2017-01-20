export const getDisplayName = name => {
  let reg = /^.[a-z]*/;
  let displayName = name.match(reg);

  if (displayName.length > 10) {
    displayName = displayName.slice(0, 7) + "...";
  }
  
  return displayName;
};
