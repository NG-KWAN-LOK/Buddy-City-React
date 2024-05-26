export const getEraName = (year: string, language: string) => {
  const era = parseInt(year) - 2011;
  return `${language != "en" ? "友平" : "BUDDY"}${
    language != "en" && era === 1 ? "元" : ` ${era} `
  }${language != "en" ? "年" : ""}`;
};
