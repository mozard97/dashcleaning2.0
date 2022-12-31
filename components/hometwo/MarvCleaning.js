import { PlayIcon } from 'heroicons2/24/solid'
import { useEffect, useState } from 'react'
import { client } from '../../lib/client'

export default function MarvCleaning({ marvClean }) {
    const [marvClean2, setMarvClean] = useState(marvClean)

    useEffect(() => {
        const query = `*[_type == "marvClean"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                        {
                        title,
                        url
                        }`
        const datafetching = async () => {
            const marv = await client.fetch(query)
            setMarvClean(marv)
        }
        if (marvClean) {
            return
        }
        datafetching()
    }, [])
    return (
        <div className="">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:shadow lg:rounded-md border-b lg:border border-gray-200 ">
                <div className="mx-auto max-w-3xl space-y-4">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Where does MarvCleaning operate?
                    </h2>
                    <p className='text-center text-gray-500'>Our company operates in hundreds of cities throughout the United States. You can rely on MarvCleaning no matter where you live.</p>
                    <dl className="mt-6 flex flex-wrap gap-6 justify-between  md:grid grid-cols-2 sm:grid-cols-3">
                        {marvClean2?.map((marvclean, i) => (
                            <a key={marvclean._id} href={marvclean.url} className='flex items-center text-[100%] my-1 md:my-3'>
                                <span className="mr-2 flex  items-center">
                                    <PlayIcon
                                        className={'h-5 w-5 transform text-gray-600'}
                                        aria-hidden="true"
                                    />
                                </span>
                                <span className="font-medium text-gray-900">{marvclean.title}</span>
                            </a>
                        ))}
                    </dl>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
