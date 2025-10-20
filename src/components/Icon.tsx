export const Icon = (props: { iconId: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`sprite.svg#${props.iconId}`}/>
    </svg>
  );
};

const ImgSvg = styled.svg`
  width:  24px;
  height:  24px;
  viewBox:  0 0 24px 24px;
  fill: none;
  xmlns: "http://www.w3.org/2000/svg";
  display: inline-block;
  text-align: center;
`