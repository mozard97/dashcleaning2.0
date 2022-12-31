import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/client";

export default function RecentBlogs() {
    const [posts, setPosts] = useState([])
    const router = useRouter()
    useEffect(() => {
        const query = `*[_type == "post"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) 
                        {
                        title, 
                        slug,
                        mainImage,
                        "name":author->name,
                        "categories": categories[]->title, publishedAt, 
                        "authorImage":author->image
                        }`
        const datafetching = async () => {
            const posts = await client.fetch(query);
            setPosts(posts)
        }
        datafetching()
    }, [])

    return (
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trending MarvCleaning blogs</h2>
                    <p className="mx-auto mt-3 max-w-2xl  text-gray-500 sm:mt-4">
                    Discover all there is to know about MarvCleaning by checking out our latest blogs
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {posts?.slice(0, 3).map((post, i) => (
                        <div key={i} className="flex flex-col overflow-hidden rounded-lg shadow">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={urlFor(post.mainImage).url()} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={"#"} className="hover:underline text-sm text-indigo-600">
                                            {post.categories[0]}
                                        </a>
                                    </p>
                                    <Link href={"/blogs/" + post.slug.current}>
                                        <a className="mt-2 block">
                                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        </a>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={"#"}>
                                            <img className="h-10 w-10 rounded-full" src={urlFor(post.authorImage).url()} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={"#"} className="hover:underline text-sm font-medium text-gray-900">
                                                {post.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={new Date(post.publishedAt).toDateString()}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{"5 min read"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    onClick = {()=>{router.push('./blogs')}}
                    className="block text-base w-fit mt-4 text-indigo-500 rounded-md border-2 border-indigo-500 bg-white  py-2.5 px-4 font-medium shadow hover:bg-indigo-50 focus:outline-none cursor-pointer"
                >
                    See more blogs
                </a>
            </div>
        </div >
    )
}
