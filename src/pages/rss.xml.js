import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'The Half Nobody Quotes',
    description: 'Sentences the industry repeats, tested until the missing half falls out.',
    site: new URL(import.meta.env.BASE_URL, context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/posts/${post.id}/`,
    })),
  });
}
