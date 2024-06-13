function Tag({ status }) {
    return (
        <div className="px-2 py-1   bg-gray-500 rounded-2xl">
            <p className="text-sm text-white font-thin">
            {status}
            </p>
        </div>
    )
}

export default Tag