import MetaHead from '@/components/shared/meta-head';

function About() {
  return (
    <>
      <MetaHead title="About" description={process.env.NEXT_PUBLIC_SITE_DESC} />
      <div className="card shadow-sm">
        <div className="card-body">
          <h1>About</h1>
          <p>
            AnimeInfo merupakan website yang berisi tentang informasi terkini
            tentang anime dan juga rekomendasi anime dari berbagai genre.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
