import React from 'react';

export type IconProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Icon({ text }: IconProps) {
  return (
    <div>
      {text}
    </div>
  );
}
