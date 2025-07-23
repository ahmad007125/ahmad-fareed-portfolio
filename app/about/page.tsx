import NavigationMenuDemo from "../components/Header";

export default function aboutPage() {
    return (
        <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NavigationMenuDemo />
            <div className="about-section container flex flex-col mx-auto sm:gap-20 gap-12 px-4 md:py-16 lg:py-20 py-12">
                <h1>About US Page</h1>
            </div>
        </div>
    );
}