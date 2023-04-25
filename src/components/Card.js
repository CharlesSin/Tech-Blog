const Card = ({ post }) => {
  return (
    <div key={post._id} className="flex py-6 shadow-xl rounded-md p-4 w-full mb-2">
      <div className="hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={post.imageSrc} alt={post.imageAlt} className="hidden h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col w-full">
        <div className="flex justify-between text-base font-medium text-gray-900 w-full">
          <h3 className="w-full truncate">
            <a href={post.href} title={post.title}>
              {post.title}
            </a>
          </h3>
        </div>
        <h5 className="mt-1 text-sm text-gray-500 w-full">{post.desc}</h5>
        <p className="mt-1 text-sm text-gray-500">{post.createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
