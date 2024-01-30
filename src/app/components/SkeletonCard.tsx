import clsx from "clsx";

export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
    return (
        <div
            className={clsx(
                "flex flex-col p-5 text-gray-300 shadow-lg h-96 bg-slate-800",
                {
                    "bg-gray-200 rounded p-4 shadow-md animate-pulse duration-700":
                        isLoading,
                }
            )}
        >
            <div className="relative flex-1 bg-zinc-700"></div>
            <div className="flex justify-between my-3 font-bold bg-zinc-700"></div>
            <div className="w-8/12 h-3 rounded-md bg-zinc-700"></div>
        </div>
    );
}
