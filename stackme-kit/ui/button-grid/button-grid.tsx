import React from 'react';

export type ButtonGridProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ButtonGrid({ text }: ButtonGridProps) {
  return (
    <div>
      {text}
    </div>
  );
}
