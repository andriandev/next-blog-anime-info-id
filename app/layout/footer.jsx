import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-light">
      <p className="text-center text-muted my-3">
        Copyright ©{new Date().getFullYear() + ' '}
        <Link href="/">
          <a className="text-muted text-decoration-none">
            {process.env.NEXT_PUBLIC_SITE_TITLE}
          </a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
