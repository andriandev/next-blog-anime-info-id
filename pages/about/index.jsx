import MetaHead from '@/components/shared/meta-head';
import MyImage from '@/components/shared/my-image';

function About() {
  return (
    <>
      <MetaHead title="About" description={process.env.NEXT_PUBLIC_SITE_DESC} />
      <div className="card shadow-sm">
        <div className="card-body">
          <h1>About</h1>
          <MyImage
            width={200}
            height={200}
            src="https://i.ibb.co/p2wMSB0/Nighcore-Zodiac.jpg"
            className="card-img-top"
            alt="About Me"
          />
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
