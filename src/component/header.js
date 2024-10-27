import { RiArrowDropDownLine } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="lg:flex lg:mt-10 gap-20 m-5 items-center lg:w-[80%] lg:mx-auto">
                <div className="lg:w-[50%]  space-y-5">
                    <h1 className="lg:text-6xl text-4xl font-bold text-yellow-400">Stuck in Code</h1>
                    <h1 className="text-white text-xl font-bold">About</h1>
                    <p className="lg:text-sm text-xs text-white"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center  text-white bg-pink-900">C++</button>
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center text-white bg-green-900">C</button>
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center text-white bg-blue-300">React</button>
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center text-white bg-purple-700">Javascript</button>
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center text-white bg-yellow-900">HTML</button>
                        <button className="lg:p-3 p-1 shadow-xl rounded-full lg:w-52 w-32 text-center text-white bg-black">CSS</button>
                    </div>
                </div>
                <div className="lg:w-[50%] lg:mt-0 mt-20 rounded-xl shadow-2xl">
                    <div className="flex  flex-col space-y-5 rounded-xl lg:p-6">
                        <label className="text-xl font-bold  text-white">Select Language</label>
                        <div className="w-full bg-blue-900 text-white cursor-pointer rounded-md relative">
                            <select id="dropdown" className="w-full rounded-xl p-3 bg-blue-900 outine-none border-none">
                                <option>
                                    English
                                </option>
                                <option>
                                    Urdu
                                </option>
                                <option>
                                    Spanish
                                </option>
                            </select>  
                             <RiArrowDropDownLine className="text-4xl text-white absolute right-5 top-1" />
                        </div>
                        <label className="text-xl  font-bold text-white">Notes (for Session)</label>
                        <textarea  className="w-full bg-blue-900 h-32 rounded-lg outline-none p-3 text-white"></textarea>
                        <div className="w-full bg-blue-900 text-white cursor-pointer rounded-md relative">
                            <input type="text" placeholder="Pick time" className="w-full bg-blue-900 p-3 text-white cursor-pointer rounded-md relative"/>
                            <RiArrowDropDownLine className="text-4xl text-white absolute right-5 top-1"/>
                        </div>
                        <label className="text-lg font-bold  text-white">How much can you afford?</label>
                        <div className="w-full bg-blue-900 outline-none text-white cursor-pointer rounded-md relative">
                            <input type="text" placeholder="Pick time" className="w-full bg-blue-900 py-3 px-14 text-white cursor-pointer rounded-md relative"/>
                            <FaDollarSign className="text-md text-white absolute left-5 top-4"/>

                        </div>
                        <button className="w-52 text-center rounded-full p-3 text-white bg-gray-900 flex justify-center mx-auto">Request Quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header