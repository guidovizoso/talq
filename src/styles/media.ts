const size = {
  small: "480px",
  medium: "768px",
  large: "1024px",
  largeAlt: "1260px",
  wide: "1440px"
};

const media = (Object.keys(size) as Array<keyof typeof size>).reduce((acc: any, key: string) => {
  acc[key] = (style: string) => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `;
  return acc;
}, {} as (typeof size[keyof typeof size])[]);

export default media;
