import IconStar from "../../icons/IconStar";

const CardTestimonial = ({text, paragraph, user}) => {
    return (
        <blockquote className="flex h-full flex-col justify-between border-2 border-secondary p-6 shadow-sm sm:p-8 rounded-md">
            <div>
                <div className="flex gap-0.5 text-secondary">
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                </div>
                <div className="mt-4">
                    <p className="whitespace-nowrap rounded-full w-2/5 bg-purple-100 px-2 py-0.5 text-sm text-purple-700">
                        {text}
                    </p>
                    <p className="mt-4 leading-relaxed text-white">{paragraph}</p>
                </div>
            </div>
            <footer className="mt-4 text-sm text-white font-bold sm:mt-6">
                — {user}
            </footer>
        </blockquote>
    )
}
export default CardTestimonial;