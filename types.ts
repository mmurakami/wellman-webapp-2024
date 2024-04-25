import { SbBlokData } from "@storyblok/react";

type SbBlokType<T> = SbBlokData & T;

export type SbBlokInjected<T> = {
  blok: SbBlokType<T>;
};
