import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { culinariaCuiabanaPosts } from "../mocks/culinariaCuiabanaPosts";

interface Post {
  id: number;
  user: {
    name: string;
    avatarUrl: string;
  };
  imageUrl: string;
  imageAlt: string;
  caption: string;
  likes: number;
  comments: {
    id: number;
    user: string;
    text: string;
  }[];
  timestamp: string;
}

export const CulinariaCuiabanaFeed = () => {
  const posts: Post[] = culinariaCuiabanaPosts;

  return (
    <div
      className="flex flex-col items-center space-y-10 p-6 bg-gradient-to-r from-indigo-50/90 to-purple-50/90"
      role="feed"
    >
      {posts.map((post) => {
        const header = (
          <div className="flex items-center p-5 border-b border-gray-200 bg-gray-50">
            <div className="w-10 h-10 rounded-full mr-3 overflow-hidden flex-shrink-0">
              <img
                src={post.user.avatarUrl}
                alt={`Avatar de ${post.user.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="font-semibold text-gray-800"
              id={`post-user-${post.id}`}
            >
              {post.user.name}
            </span>
          </div>
        );

        const footer = (
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <Button
                  icon="pi pi-heart"
                  className="p-button-text p-button-plain text-red-600 mr-2 p-button-lg"
                  aria-label="Curtir"
                />
                <Button
                  icon="pi pi-comment"
                  className="p-button-text p-button-plain text-gray-700 mr-2 p-button-lg"
                  aria-label="Comentar"
                />
                <Button
                  icon="pi pi-share-alt"
                  className="p-button-text p-button-plain text-gray-700 p-button-lg"
                  aria-label="Compartilhar"
                />
              </div>
              <span className="text-base text-gray-500">
                {post.likes} curtidas
              </span>
            </div>
            <p className="text-base text-gray-500">{post.timestamp}</p>
          </div>
        );

        return (
          <article
            key={post.id}
            aria-labelledby={`post-user-${post.id}`}
            aria-describedby={`post-caption-${post.id}`}
          >
            <Card
              header={header}
              footer={footer}
              className="w-full max-w-xl shadow-xl rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "600px" }} // Limita a altura da imagem
              />
              <div className="p-4">
                <p
                  className="text-lg text-gray-700 mb-2"
                  id={`post-caption-${post.id}`}
                >
                  <span className="font-semibold text-gray-800 sr-only">
                    {post.user.name}
                  </span>{" "}
                  {post.caption}
                </p>
                {post.comments.length > 0 && (
                  <div className="mt-3">
                    {post.comments.map((comment) => (
                      <p
                        key={comment.id}
                        className="text-base text-gray-600 mb-1"
                      >
                        <span className="font-semibold">{comment.user}</span>{" "}
                        {comment.text}
                      </p>
                    ))}
                    {post.comments.length > 1 && (
                      <Button
                        label={`Ver todos os ${post.comments.length} comentários`}
                        className="p-button-text text-base text-gray-500 mt-1"
                      />
                    )}
                  </div>
                )}
              </div>
            </Card>
          </article>
        );
      })}
    </div>
  );
};
