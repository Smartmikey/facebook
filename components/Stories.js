import StoryCard from "./StoryCard";
const stories = [
    {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Michael Monday Abah",
        src: "https://avatars.githubusercontent.com/u/38321155?u=1df51d57e45a3f7a11c8c4fbc9faa51daacbf5cc&v=4",
        profile: "https://media-exp1.licdn.com/dms/image/C4D03AQFGtN63bx6R5g/profile-displayphoto-shrink_800_800/0/1633476029059?e=1640217600&v=beta&t=bOYMhX0hD2HKtZgi9FONIIXuXegOELSSjpgSpZa_HVc"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(story => (
                    <StoryCard 
                        key={story.src}
                        name={story.name} 
                        src={story.src} 
                        profile={story.profile} 
                    />
                ))
            }
        </div>
    )
}

export default Stories
