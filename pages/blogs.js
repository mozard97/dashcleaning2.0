/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { client, urlFor } from "../lib/client";
import css from "../styles/Blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import NewNavbar from "../components/hometwo/partials/Navbar";
// import Footer from "../components/Footer";
import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import AboutFooter from "../components/AboutFooter";
export default function Blog({ posts }) {
  const itemsPerPage = 6;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // filter logic
  const applyFilter = (filter) => {
    let filtered = posts;
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    if (filter.length >= 2) {
      filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      );
      setCurrentItems(filtered.slice(itemOffset, endOffset));
    }
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  //  const src = urlFor(post.mainImage).url();
  return (
    <>
      <NewNavbar />
      <div className={css.wrapper}>
        <div className={css.blogHead}>
          <div></div>
          <div className={css.heading}>
            <span>Blog</span>
            <span>Enjoy Cleanliness in your Home</span>
          </div>

          <div className={css.search}>
            <input
              type="text"
              placeholder="Search Blog"
              onChange={(e) => applyFilter(e.target.value)}
            />
            <SearchIcon />
          </div>
        </div>
        <div className={`${css.container}`}>
          {currentItems?.map((post) => {
            const src = urlFor(post.mainImage).url();
            const authorSrc = urlFor(post.authorImage).url();
            return (
              <Link href={`./blogs/${post.slug.current}`} key={post._id}>
                <div className={css.post} key={post._id}>
                  <div className={css.imageWrapper}>
                    <Image
                      loader={() => src}
                      src={src}
                      alt="pizza"
                      objectFit="cover"
                      layout="fill"
                      loading="lazy"
                    />
                  </div>
                  <span>{post.categories.map((category) => category)}</span>
                  <span>{post.title}</span>
                  <div>
                    <div className={css.authorImageWrapper}>
                      <Image
                        loader={() => authorSrc}
                        src={authorSrc}
                        alt="authorImage"
                        objectFit="cover"
                        layout="fill"
                        loading="lazy"
                      />
                    </div>
                    <span>{post.name}</span>
                    <span>{new Date(post.publishedAt).toDateString()}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="pagination"
      />
      {/* <Footer /> */}
      <AboutFooter />
    </>
  );
}

export async function getServerSideProps() {
  const query =
    '*[_type == "post"  && !(_id in path("drafts.**"))]  | order(publishedAt desc) {title, slug, mainImage, "name":author->name, "categories": categories[]->title, publishedAt, "authorImage":author->image}';
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}
