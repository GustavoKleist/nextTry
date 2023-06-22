import { FC } from "react";

interface LabelProps {
    text: string;
  }

const AtomLabel: FC<LabelProps> = ({text}) => {
    return <label>{text}</label>
}

export default AtomLabel;