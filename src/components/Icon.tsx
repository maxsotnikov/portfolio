export const Icon = (props: { iconId: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`../../public/sprite.svg#${props.iconId}`}/>
    </svg>
  );
};