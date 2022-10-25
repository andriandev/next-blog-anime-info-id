import Image from 'next/image';

const MyImage = (props) => {
  return (
    <Image {...props} placeholder="blur" blurDataURL="/assets/img/loader.png" />
  );
};

export default MyImage;
