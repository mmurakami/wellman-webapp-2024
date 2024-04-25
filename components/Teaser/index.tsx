import { storyblokEditable } from '@storyblok/react';

import { SbBlokInjected } from '@/types';

interface ITeaserBlok {
  _uid: string;
  component: 'teaser';
  headline?: string;
}

interface ITeaserProps extends SbBlokInjected<ITeaserBlok> {

}

const Teaser = ({ blok }: ITeaserProps) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
