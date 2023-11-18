const HeaderSummary = (props) => {
    return (
        <div className="inline-block border-[2px] rounded-3xl mb-6">
            <div className="flex justify-center items-center gap-[10px] py-[5px] pl-[11px] pr-[15px]">
                <div className="w-[10px] h-[10px] bg-white rounded-[50%]"></div>

                <h4 className="text-white text-[16px] font-normal">
                    {props.summaryText}
                </h4>
            </div>
        </div>
    )
}

export default HeaderSummary