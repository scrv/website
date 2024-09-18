import { getEntries } from '@/app/utils/engineering-daybook'
import Link from 'next/link'

export default function EngineeringDaybook() {
    let entries = getEntries()
    return <>
    {
        entries.map(el => (<Link key={el.slug} href={`engineering-daybook/${el.slug}`}>{el.slug}</Link>))
    }
    </>
}