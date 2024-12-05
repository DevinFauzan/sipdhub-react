import { PostsAll } from './blocks/PostsAll';

interface INewsFeedContentProps {}

const NewsFeedContentAll: React.FC<INewsFeedContentProps> = () => {
  return (
    <div className="w-full mx-0 px-0 mb-7"> {/* Remove margins and paddings */}
      <div className="grid grid-cols-1 gap-5 lg:gap-7.5"> {/* Use 1 column for full width */}
        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <PostsAll /> {/* Correctly render the PostsAll component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsFeedContentAll };
