import React from "react";

export const VectorIcon = ({
  type: Type,
  name,
  size,
  color,
}: {
  type: React.ComponentProps<any>;
  // type: React.FC<{size:number,name:string,color:string}>;
  name: string;
  size: number;
  color: string;
}) => {
  return <Type size={size} name={name} color={color}/>;
};
