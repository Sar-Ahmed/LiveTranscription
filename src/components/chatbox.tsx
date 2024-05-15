import { useState } from "react";

const ChatBox = () => {
    const [mailToggle, setMailToggle] = useState<boolean>(false);
    const arr = ['apple', 'orange', 'green', 'yellow', 'red', 'apple', 'orange', 'green', 'yellow', 'red', 'green', 'yellow', 'red'];

    return (
        <div className="containerWrap bg-teal-50 h-screen flex flex-col justify-end pb-24 overflow-hidden">
            <div className="overflow-y-auto flex-1">
                <div className="flex flex-row items-end justify-end">
                    <div className="pb-2 pt-2 pl-4 pr-4 rounded-lg bg-teal-100 inline-block m-5">
                        <p className="text-sm text-teal-950 text-right">
                            Avul Pakir Jainulabdeen Abdul Kalam BR (/ˈɑːbdəl kəˈlɑːm/ ⓘ; 15 October 1931 – 27 July 2015) was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007. Born and raised in a Muslim family in Rameswaram, Tamil Nadu, he studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts.[1] He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology.
                        </p>
                    </div>
                </div>
                <label className="font-bold text-teal-950 flex ml-6">PREDICTED DIAGNOSTICS: </label>
                <div className="flex items-end justify-start my-5 ml-5 flex-wrap">
                    {arr.map((item, index) => (
                        <div key={index} className="pb-2 pt-2 pl-4 pr-4 rounded-lg bg-teal-600 inline-block m-1 shadow-xl">
                            <p className="text-sm text-white text-left font-bold">{item.toUpperCase()}</p>
                        </div>
                    ))}
                </div>
                {mailToggle ? (
                    <div className="mx-5 mb-10">
                        <input
                            type="text"
                            className="border border-teal-200 bg-teal-50 p-2 w-full focus:outline-none text-teal-950"
                            placeholder="Email"
                        />
                        <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded shadow-md mt-5">SEND</button>
                    </div>
                ) : (
                    <div className="mb-8 mx-6 flex flex-start">
                        <button
                            onClick={() => setMailToggle(true)}
                            className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-50 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                        >
                            Send in through mail?
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
