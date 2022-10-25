import Head from 'next/head';
import { useRouter } from 'next/router';

function MetaHead(props) {
  // Get canonical url
  const { asPath } = useRouter();

  // Delete params '?' and '#'
  let urlPath = '';
  if (asPath.includes('?')) {
    urlPath = asPath.split('?')[0];
  } else if (asPath.includes('#')) {
    urlPath = asPath.split('#')[0];
  } else {
    urlPath = asPath;
  }

  // Delete '/' in home page
  if (urlPath === '/') {
    urlPath = '';
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        {urlPath == ''
          ? `${props.title} - ${process.env.NEXT_PUBLIC_SITE_DESC}`
          : `${props.title} - ${process.env.NEXT_PUBLIC_SITE_TITLE}`}
      </title>
      <meta name="description" content={props.description} />
      <meta
        name="robots"
        content={props.index === 'noindex' ? 'noindex, nofollow' : props.index}
      />
      <meta
        property="og:type"
        content={
          urlPath == '' || urlPath.includes('/page') ? 'website' : 'article'
        }
      />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_SITE_TITLE}
      />
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_SITE_GSC}
      />
      <link
        rel="canonical"
        href={
          props.canonical
            ? process.env.NEXT_PUBLIC_BASE_URL + '/' + props.canonical
            : process.env.NEXT_PUBLIC_BASE_URL + urlPath
        }
      />
      <link
        rel="icon"
        type="image/ico"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`}
      />
    </Head>
  );
}

MetaHead.defaultProps = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESC,
  index: 'index, follow',
};

export default MetaHead;
