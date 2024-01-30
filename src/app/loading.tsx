import SkeletonCard from "./components/SkeletonCard";

export default function Product() {
    return (
        <div className="px-8 pt-8 mx-auto max-w-7xl xl:px-0 ">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
                <SkeletonCard isLoading />
            </div>
        </div>
    );
}
