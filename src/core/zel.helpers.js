export const classPrefix = `zep-`;
export const htmlDataVarType = `data-${classPrefix}type`;

export const formatZepType = (type) => {
  return type
    .toLowerCase()
    .trim()
    .split(/ |-/gi)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
};
