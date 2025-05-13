import { Head, Link, router } from '@inertiajs/react'
import { Fragment } from 'react'
import Infobox from '../Layout/Infobox'
import Navbar from '../Layout/Navbar'
import Post from '../Post/Post'
import { PostType } from '../Post/types'

interface MergingPropsProps {
    posts: PostType[]
    pagy: {
        next: number
    }
}

export default function MergingProps({ posts, pagy }: MergingPropsProps) {
    function handleLoadMore() {
        router.reload({
            data: {
                page: pagy.next
            },
            only: ['posts', 'pagy']
        })
    }

    return (
        <>
            <Head title="Merging Props" />

            <div className="mx-auto md:w-4xl lg:w-6xl w-full px-8 pt-8">
                <div className="mx-auto pb-8 justify-center items-center w-full text-center">
                    <Navbar />
                </div>

                <Infobox>
                    <p className="mb-2">
                        By default, Inertia overwrites props with the same name when reloading a page. However, there are instances, such as <strong>pagination</strong> or <strong>infinite scrolling</strong>, where that is not the desired behavior. In these cases, <strong>you can merge props instead of overwriting them</strong>.
                    </p>
                </Infobox>


                <div className="flex justify-center items-center mb-12">
                    <h1 className="font-bold text-4xl">Posts</h1>
                </div>

                <div className="min-w-full mb-10">
                    {posts.map((post) => (
                        <Fragment key={post.id}>
                            <Post post={post} />
                            <p>
                                <Link
                                    href={`/posts/${post.id}`}
                                    className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                                >
                                    Show post #{post.id}
                                </Link>
                            </p>
                        </Fragment>
                    ))}

                    {pagy.next && (
                        <div className="flex justify-center items-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="rounded-lg py-3 px-5 bg-gray-200 hover:bg-gray-300 inline-block font-medium"
                            >
                                Load more...
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
