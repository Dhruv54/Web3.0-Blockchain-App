import dummydata from "../utils/dummyData"
const Transactions = () => {
    return (
        <div className="flex flex-row bg-[#181918]">
            <div className="bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
            >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">From: Ox29723942792</p>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">To: Ox29723942792</p>
                </a>
                <p className="text-white text-base">Amount: 1 ETH</p>
                    <br />
                    <p className="text-white text-base">Message: Done</p>
                </div>
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                <p className="text-[#37c7da] font-bold">21:12:21</p>
                </div>
            </div>
            </div>
            <div className="bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
            >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">From: Ox2485923</p>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">To: Ox19723942792</p>
                </a>
                <p className="text-white text-base">Amount: 2 ETH</p>
                    <br />
                    <p className="text-white text-base">Message: Done</p>
                </div>
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                <p className="text-[#37c7da] font-bold">20:12:21</p>
                </div>
            </div>
            </div>
            <div className="bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
            >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">From: Ox39723942792</p>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <p className="text-white text-base">To: Ox49723942792</p>
                </a>
                <p className="text-white text-base">Amount: 3 ETH</p>
                    <br />
                    <p className="text-white text-base">Message: Done</p>
                </div>
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                <p className="text-[#37c7da] font-bold">12:12:21</p>
                </div>
            </div>
            </div>
        </div>
    );
    
}

export default Transactions;