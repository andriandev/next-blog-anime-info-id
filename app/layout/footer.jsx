import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-light pt-4 border-top">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <h5>Partner</h5>
            <ul className="ps-3">
              <li>
                <a
                  className="text-dark text-decoration-none"
                  href="https://adikfilm.link"
                >
                  Adikfilm
                </a>
              </li>
              <li>
                <a
                  className="text-dark text-decoration-none"
                  href="https://adikanime.com"
                >
                  Adikanime
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Halaman</h5>
            <ul className="ps-3">
              <li>
                <Link href="/">
                  <a className="text-dark text-decoration-none">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-dark text-decoration-none">About</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>About</h5>
            <p>
              AnimeInfo merupakan website yang berisi tentang informasi terkini
              tentang anime dan beragam hal lainnya.
            </p>
          </div>
        </div>
        <p className="text-center text-muted mb-3">
          Copyright ©{new Date().getFullYear() + ' '}
          <Link href="/">
            <a className="text-muted text-decoration-none">
              {process.env.NEXT_PUBLIC_SITE_TITLE}
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
