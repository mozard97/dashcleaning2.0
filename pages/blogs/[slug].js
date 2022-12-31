import css from "../../styles/Blog.module.css";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import NewNavbar from "../../components/hometwo/partials/Navbar";
// import AboutFooter from "../../components/AboutFooter";



const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          // loader = {()=>urlFor(value).fit("max").auto("format")}
          src={urlFor(value).fit("max").auto("format")}
        />
      );
    },
  },
};
// import styles from styles

// main body
export default function Blog({ post }) {
  const src = urlFor(post.mainImage).url();
  const authorSrc = urlFor(post.authorImage).url();

  const CANONICAL_DOMAIN = 'https://marvcleaning.com/blogs';
  const router = useRouter();
  <Head>
    <link rel="canonical" href={CANONICAL_DOMAIN} />
  </Head>

  return (
    <>
      <NewNavbar />

      <Head>
        <title>MarvCleaning cleaning services | Blog</title>
        <meta
          name="description"
          content=" Get your home or business cleaned by certified cleaners with over years of experience. Call us to schedule an appointment today!
                  "
        />
        <meta name="keywords" content=" house maid services near me , home cleaning,maid cleaning,house cleaning services,house cleaners near me,
            maids,home cleaning services near me,clean house,house keeping,maids near me,move out cleaning services,residential cleaning services,
            home sanitization,apartment cleaning services,professional house cleaning,home cleaners near me,tidy home," />

        <meta property="og:title" content="  MarvCleaning services Blog" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>






      <div className={css.container}>
        <span>{post.categories.map((category) => category)}</span>
        <span>{post.title}</span>
        <div className={css.author}>
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
          <div>
            <span>{post.name}</span>
            <span>{new Date(post.publishedAt).toDateString()}</span>
          </div>
        </div>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt="post"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={css.blogText}>
          <PortableText value={post.body} components={ptComponents} />
        </div>
        <Link href="../blogs">
          <span>← View all posts</span>
        </Link>
        <div className={css.authorDetail}>
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
          <div>
            <span>
              <b>About {post.name}</b>
            </span>
            <span>
              <PortableText value={post.bio} components={ptComponents} />
            </span>
          </div>
        </div>
      </div>
      <Footer />
      {/* <AboutFooter /> */}
    </>
  );
}
// getStaticPaths function
// Server side code
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "posts" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]{title, mainImage, "name":author->name, "bio":author->bio,"categories": categories[]->title, publishedAt, "authorImage":author->image, body}`
  );
  return {
    props: {
      post,
    },
  };
}
