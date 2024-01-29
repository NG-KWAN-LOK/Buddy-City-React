export const getTextColor = (hexColor: string) => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance < 0.5
    ? "var(--primary-button-title-color)"
    : "var(--phone-top-nav-col-line-color)";
};
