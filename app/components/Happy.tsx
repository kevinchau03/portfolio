export function Happy() {
    return (
        <div id="happy">
            <h1 className="text-center text-4xl font-bold mb-4 mt-4 lg:text-left">Things I enjoy and am passionate about</h1>
            <div className="flex">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Coding & School</h2>
                    <p>I consider myself an average coder. I haven't worked or interned at any FANG companies, I haven't won numerous hackathons, and I'm certainly not at the top of my class.
                        My school, Western University, isn't regarded as a top-tier computer science institution, especially when compared to schools like Waterloo or the University of Toronto.
                        So, what do I have? An average coder from an average school. Where do I go from here?
                    </p>
                    <button>Read</button>
                </div>
            </div>
            <div className="flex">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Life</h2>
                    <p className="text-base">Through my twenty years of living on this earth I have learned many things.
                        Some believe, that their best years were when they were in kids, some believe it was during college getting drunk on the weekends.
                        What I like to believe is that our best days are still ahead of us, no matter what stage of our life we're at.
                    </p>
                    <button>Read</button>
                </div>
            </div>
        </div>
    )
}