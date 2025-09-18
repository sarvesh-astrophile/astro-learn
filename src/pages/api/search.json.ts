import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }) => {
    const query: string | null = url.searchParams.get('query');

    if (query === null || !query) {
        return new Response(JSON.stringify([]), { status: 400, headers: {
            'Content-Type': 'application/json'
        }
        });
    }

    const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection('blog');
    const searchResults = allBlogArticles.filter(article => {
        const titleMatch = article.data.title.toLowerCase().includes(query!.toLowerCase());
        const bodyMatch = article.body.toLowerCase().includes(query!.toLowerCase());
        return titleMatch || bodyMatch;
    });
    return new Response(JSON.stringify(searchResults), { status: 200, headers: {
        'Content-Type': 'application/json'
    } });
}