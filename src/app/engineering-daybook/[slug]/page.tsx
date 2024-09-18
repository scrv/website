import { getEntries } from '@/app/utils/engineering-daybook'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export function generateStaticParams() {
    let entries = getEntries()

    return entries.map((entry) => ({
        slug: entry.slug,
    }))
}

export default function EngineeringDaybookEntry({ params }: any) {
    let entry = getEntries().find((post) => post.slug === params.slug)

    if (!entry) {
        notFound()
    }

    return <>
    {entry.metadata.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
       <MDXRemote source={entry.content} />
    </>
}