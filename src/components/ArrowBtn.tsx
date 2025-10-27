type ArrowBtnProps = {
  iconId: string;
}

export const ArrowBtn = ({iconId}: ArrowBtnProps) => {
  return (
    <svg width="16" height="16" viewBox= {`0 0 16 16`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <use xlinkHref={`sprite.svg#${iconId}`}/>
  </svg>
);
};