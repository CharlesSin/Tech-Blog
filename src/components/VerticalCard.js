const VerticalCard = ({ post }) => {
  return (
    <div key={post._id} className="group relative cursor-pointer">
      <div className="min-h-50 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
        <img src="https://img.icons8.com/ios-filled/50/null/no-image.png" alt="blank" className="object-fill h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={post.link} title={post.title}>
              <span aria-hidden="true" className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="text-sm font-smal text-gray-900 text-ellipsis overflow-hidden">{post.desc}</p>
          <p className="text-sm font-medium text-gray-900">{post.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
