import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";
function Feed() {
    return (
        <div className="flex-grow pb-44 h-screen pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            {/* Stories */}
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories />
                {/* Feeds */}
                <InputBox />
                {/* Posts */}
                <Posts />
            </div>

        </div>
    )
}

export default Feed
