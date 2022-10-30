import MyImage from '@/components/shared/my-image';
import Link from 'next/link';

function PostItem(props) {
  const { id, slug, title, image } = props;

  const imgUrl = image.includes('https://') ? image : `/assets/img/${image}`;

  return (
    <>
      <Link href={`/${slug}`}>
        <a className="text-decoration-none">
          <MyImage
            width={600}
            height={350}
            src={imgUrl}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title text-dark">{title}</h5>
          </div>
        </a>
      </Link>
    </>
  );
}

export default PostItem;
