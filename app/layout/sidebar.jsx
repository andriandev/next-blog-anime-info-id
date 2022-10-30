import Link from 'next/link';

function Sidebar(props) {
  const { recentPost } = props;

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5>Recent Post</h5>
          <ol className="list-group list-group-numbered">
            {recentPost.map((post) => (
              <li key={post.id}>
                #{' '}
                <Link href={`/${post.slug}`}>
                  <a className="text-decoration-none text-primary">
                    {post.title}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
