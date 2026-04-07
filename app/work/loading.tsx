export default function Loading() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="w-full h-[300px] bg-gray-800 animate-pulse rounded-xl"
                />
            ))}
        </div>
    );
}