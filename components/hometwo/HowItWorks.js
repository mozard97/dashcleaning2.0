import { BoltIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon, GlobeAltIcon, InboxStackIcon, ScaleIcon } from 'heroicons2/24/outline'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { client } from '../../lib/client';

const features = [
    {
        name: '1.  We are here to help with all your home needs',
        description: 'The cleanest way to maintain your home is with MarvCleaning. No matter what size or complexity of job, we can handle it - whether it is a routine maintenance issue or a renovation project.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: "2. Our solutions are tailored to meet your needs",
        description:
            "We provide a simple, easy-to-use platform that allows customers to see their price and book their services in just a few clicks.",
        icon: BoltIcon,
    },
    {
        name: "3. Count on us for everything from start to finish",
        description: " MarvCleaning is proud to offer a 100% satisfaction guarantee on all of our services. We understand that your time is valuable, and we want you to be completely happy with our work. That's why we always go the extra mile to deliver outstanding results. ",
        icon: InboxStackIcon,
    },
]

export default function HowItWorks({ howItWorks }) {
    const [howItWorks2, sethowItWorks] = useState(howItWorks)
    const router = useRouter();

    useEffect(() => {
        const query = `*[_type == "howItWorks"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                        {
                        content,
                        learnMore
                        }`
        const datafetching = async () => {
            const reviews = await client.fetch(query)
            sethowItWorks(reviews[0])
        }
        if (howItWorks) {
            return
        }
        datafetching()
    }, [])

    return (
        <div className="overflow-hidden ">
            <div className="relative mx-auto max-w-7xl py-12 px-0   border-b border-gray-200 ">
                <div className="relative lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">How it works.</h2>
                    </div>
                    <div className="bg-white pt-10 sm:pt-10 lg:pt-10">
                        <div className="mx-auto max-w-xl px-4 lg:max-w-7xl lg:px-8 ">
                            <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
                                {howItWorks2?.content?.map((content, i) => (
                                    <div key={content._key}>
                                        <dt>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                                                {
                                                    i == 0 ? <ChatBubbleLeftEllipsisIcon className="h-8 w-8" aria-hidden="true" />
                                                        : i == 1 ? <BoltIcon className="h-8 w-8" aria-hidden="true" />
                                                            : <InboxStackIcon className="h-8 w-8" aria-hidden="true" />
                                                }

                                            </div>
                                            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{i + 1 + ". " + content.title}</p>
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{content.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            <button
                                onClick={() => {
                                    router.push(howItWorks.learnMore ? howItWorks.learnMore : "#")
                                }}
                                type="submit"
                                className="block mt-4 text-indigo-500 rounded-md border-2 border-indigo-500 bg-white  py-2.5 px-4 font-medium shadow hover:bg-indigo-50 focus:outline-none"
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
