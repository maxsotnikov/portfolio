
type  FontTypeProps = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : FontTypeProps) =>`
  font-family: ${family ||  "Epilogue"};
  font-weight: ${weight || 400};
  color: ${color};
  line-height: ${lineHeight || 1.5};
  font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
