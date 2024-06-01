const BookingSkeleton = () => {
    return (
        <div className="p-4 mx-40">
            <div className="flex justify-between">
                <div className="w-3/4 ">
                    <div className="flex justify-start text-gray mb-2 animate-pulse">
                        <div className="h-4 bg-lightgray rounded w-20"></div>
                    </div>
                    <h2 className="text-2xl font-bold font-main mb-4 animate-pulse">
                        <div className="h-6 bg-lightgray rounded w-40"></div>
                    </h2>
                    <div className="flex justify-start items-center mb-4 space-x-4 animate-pulse">
                        <div className="flex items-center space-x-2 cursor-pointer group">
                            <div className="h-6 bg-sky rounded w-6"></div>
                            <div className="w-28 h-4 bg-sky rounded"></div>
                        </div>

                        <div className="flex items-center space-x-2 px-5 cursor-pointer group">
                            <div className="h-6 bg-sky rounded w-6"></div>
                            <div className="w-48 h-4 bg-sky rounded"></div>
                        </div>
                    </div>
                    <div className="border border-lightgray/20 rounded-md p-2 mb-2 animate-pulse">
                        <div className="flex items-center justify-between mb-0">
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-brown rounded-full"></div>
                                <div className="w-28 h-4 bg-lightgray rounded ml-2"></div>
                            </div>
                            <div className="h-6 w-6 rounded bg-lightgray"></div>
                        </div>
                        <div className="mt-2 pl-10">
                            <div className="h-4 bg-lightgray rounded w-full mt-1"></div>
                            <div className="h-4 bg-lightgray rounded w-2/3 mt-1"></div>
                            <div className="h-4 bg-sky rounded w-1/2 mt-1"></div>
                        </div>
                    </div>
                    <div className="flex mb-4 animate-pulse">
                        <div className="flex-1">
                            <div className="h-6 bg-sky w-1/6 mb-2 rounded-full"></div>
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex items-start mb-2 space-x-4 py-2">
                                        <div className="h-6 w-6 bg-lightgray rounded-full"></div>
                                        <div className="flex space-x-4 text-sm">
                                            <div className="border-r border-lightgray/20 pr-4">
                                                <div className="h-4 bg-lightgray w-16 mb-1 rounded-full"></div>
                                                <div className="h-4 bg-lightgray w-1/2 mb-1 rounded-full"></div>
                                                <div className="h-4 bg-lightgray w-1/4 rounded-full"></div>
                                            </div>
                                            <div>
                                                <div className="h-4 bg-lightgray w-16 mb-1 rounded-full"></div>
                                                <div className="h-4 bg-lightgray w-1/2 mb-1 rounded-full"></div>
                                                <div className="h-4 bg-lightgray w-1/4 rounded-full" ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 mb-2 text-sm py-1">
                                        <div className="h-6 w-6 bg-lightgray rounded-full"></div>
                                        <div>
                                            <div className="h-4 bg-lightgray w-1/2 mb-1 rounded-full"></div>
                                            <div className="h-4 bg-lightgray w-40 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <div className="h-20 w-20 bg-lightgray rounded-lg"></div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 mb-2 text-sm py-1">
                                <div className="h-6 w-6 bg-lightgray rounded-full"></div>
                                <div>
                                    <div className="h-4 bg-lightgray w-1/2 mb-1 rounded-full"></div>
                                    <div className="h-4 bg-lightgray w-40 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 pl-4 max-w-xs animate-pulse">
                    <div className="border border-gray rounded-sm p-4 mb-4 text-sm bg-light2gray">
                        <div className="h-4 bg-lightgray rounded w-full mt-2"></div>
                        <div className="h-4 bg-lightgray rounded w-3/4 mt-2"></div>
                    </div>
                    <div className="border border-lightgray/20 rounded-sm p-4 ">
                        <div className="">
                            <div className="h-4 bg-lightgray rounded w-1/2 mt-2"></div>
                            <div className="h-4 bg-lightgray rounded w-full mt-2"></div>
                            <div className="h-4 bg-lightgray rounded w-full mt-2"></div>
                        </div>
                        <div className="mt-4">
                            <div className="h-4 bg-lightgray rounded w-1/3 mt-2"></div>
                            <div className="h-4 bg-lightgray rounded w-full mt-2"></div>
                            <div className="h-4 bg-lightgray rounded w-2/3 mt-2"></div>
                            <div className="h-4 bg-lightgray rounded w-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
    export default BookingSkeleton;