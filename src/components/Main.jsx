function Main({ skills, contain }) {
    return (
        <div>
            <div className='justify-start py-5 lg:p-5'>
                <div className='font-bold text-2xl lg:text-3xl mb-2'>{skills}</div>
                <div className='text-sm lg:text-base'>{contain}</div>
            </div>
        </div>
    )
}
export default Main