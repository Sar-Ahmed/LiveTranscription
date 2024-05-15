const SendMessage = () => {
        return (
            <div className="bg-teal-100 w-full fixed bottom-0 px-5 shadow-lg m-50"> 
                <form className="py-8 containerWrap flex "> 
                <input type="text"
                        className="border border-teal-200 bg-teal-50 rounded-lg p-2 w-full focus:outline-none text-teal-950"
                        placeholder="Start taking notes by pressing the red button"
                    />
                    <div className="flex items-center">
                        <button type="button" className="w-10 h-10 flex justify-center items-center bg-lime-600 text-white rounded-full ml-2 text-sm shadow-xl">
                        </button>
                        <button type="button" className="w-10 h-10 flex justify-center items-center bg-orange-400 text-white rounded-full ml-2 text-sm shadow-xl">           
                        </button>
                        <button type="button" className="w-10 h-10 flex justify-center items-center bg-sky-500 text-white rounded-full ml-2 text-sm shadow-xl">     
                        </button>
                    </div>                    
                </form>
            </div>
        )
}

export default SendMessage