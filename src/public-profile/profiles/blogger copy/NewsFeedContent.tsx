import { Posts } from './blocks';

interface INewsFeedContentProps {
  category: string;
}

const NewsFeedContent = ({ category }: INewsFeedContentProps) => {
  return (
    <div className="w-full mx-0 px-0 mb-7"> {/* Remove margins and paddings */}
      <div className="grid grid-cols-1 gap-5 lg:gap-7.5"> {/* Use 1 column for full width */}
        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <Posts category={category} /> {/* Correctly pass the category down to Posts */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsFeedContent };
