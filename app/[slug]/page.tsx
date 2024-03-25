import {
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
// next generated exports
import { PageProps } from "@/.next/types/app/layout";

export default async function SubPages(props: PageProps) {
  const { params: { slug } } = props;
  const { data } = await fetchData(slug);

  return (
    <StoryblokStory story={data.story} />
  );
}

export async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/${slug}`, { version: 'draft' }, { cache: 'no-store' });
}
