import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

import { SbBlokInjected } from '@/types';

interface IGridBlok {
  _uid: string;
  component: 'grid';
  columns: Array<any>; // TODO: type any
}

interface IGridProps extends SbBlokInjected<IGridBlok> {

}

const Grid = ({ blok }: IGridProps): JSX.Element => {
  return (
    <div className="grid md:grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;