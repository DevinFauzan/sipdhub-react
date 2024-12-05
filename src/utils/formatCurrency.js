export const formatUnits = (value, lang) => {
    if (lang === 'id') {
      return `${(value / 1000000).toFixed(1)} Jt`;
    } else {
      return `${(value / 1000000).toFixed(1)} M`;
    }
  };