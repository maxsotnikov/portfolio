type IconProps = {
  iconId: string;
  viewbox?: string;
}

export const SocialIcons = ({iconId, viewbox }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox= {`${viewbox}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`sprite.svg#${iconId}`}/>
    </svg>
  );
};