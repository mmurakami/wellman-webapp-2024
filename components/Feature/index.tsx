import { storyblokEditable } from "@storyblok/react";

import { SbBlokInjected } from '@/types';

interface IFeatureBlok {
  name?: string;
}

interface IFeatureProps extends SbBlokInjected<IFeatureBlok> {

}

const Feature = ({ blok }: IFeatureProps): JSX.Element => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
