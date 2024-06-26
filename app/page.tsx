import {
  ISbResult,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <StoryblokStory story={data.story} />
  );
}

async function fetchData(): Promise<ISbResult> {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get('cdn/stories/home', { version: 'draft' }, { cache: 'no-store' });
}
