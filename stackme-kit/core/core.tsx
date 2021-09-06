import React from 'react';

export type CoreProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Core({ text }: CoreProps) {
  return (
    <div>
      {text}
    </div>
  );
}
