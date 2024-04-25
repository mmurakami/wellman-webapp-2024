import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

import { SbBlokInjected } from '@/types';
import styles from './styles.module.css';

interface IPageBlok {
  _uid: string;
  component: 'page';
  body: Array<any>; // TODO: type any
}

interface IPageProps extends SbBlokInjected<IPageBlok> {

}

const Page = ({ blok }: IPageProps) => (
  <main className={`${styles.main}`} {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent
        className=""
        blok={nestedBlok}
        key={nestedBlok._uid}
      />
    ))}
  </main>
);

export default Page;
