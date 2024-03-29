import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Grid = ({ blok }): JSX.Element => {
  return (
    <div className="grid md:grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;