import { IoSearch } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import ChatPreview from "./ChatPreview";

export default function Sidebar() {
    return (
        <aside className="w-[25%] bg-white rounded-xl shadow py-4 px-2 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img className="h-12 w-12 rounded-full mr-[1rem]" src="https://i.pravatar.cc/40" alt="User" />
                        <div className="ml-[.2rem] h-3 w-3 rounded-full border-[3px] border-white bg-green-500 absolute bottom-0 right-4"></div>
                    </div>                    <div>
                        <p className="text-lg font-bold text-gray-800">Erik Ten Hag</p>
                        <p className="text-sm text-gray-500">Info account</p>
                    </div>
                </div>
                <IoSearch className="text-2xl text-gray-400 mr-[1rem]" />
            </div>
            <div className="bg-gray-200 flex justify-between p-2 rounded-full mx-2">
                <span className="bg-white text-blue-400 font-semibold py-1 px-4 rounded-full w-fit text-center">All</span>
                <span className="text-gray-500 font-semibold py-1 px-4 rounded-full w-fit text-center">Personal</span>
                <span className="text-gray-500 font-semibold py-1 px-4 rounded-full w-fit text-center">Groups</span>
            </div>
            <div>
                <div className="flex justify-between items-center mx-[1rem]">
                    <p className="text-sm text-gray-500 font-semibold mb-2">Pinned Message</p>
                    <MdOutlinePushPin className="text-gray-500 font-semibold" />
                </div>
                <div className="space-y-3">
                    <ChatPreview name="Harry Maguire" message="You need to improve now" time="09:12 AM" image="https://i.pravatar.cc/41" pinned doubleTickblue active />
                    <ChatPreview name="United Family 🔰" message="Rashford is typing..." time="06:25 AM" typing image="https://i.pravatar.cc/42" pinned />
                    <ChatPreview name="Rasmus Højlund" message="Bos, I need to talk today" time="03:11 AM" unread image="https://i.pravatar.cc/43" pinned />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mx-[1rem]">
                    <p className="text-sm text-gray-500 font-semibold mb-2">Messages</p>
                    <BiMessageRounded className="text-gray-500 font-semibold" />
                </div>
                <div className="space-y-3">
                    <ChatPreview name="Andre Onana" message="I need more time bos 😅" time="11:34 AM" image="https://i.pravatar.cc/44" active />
                    <ChatPreview name="Reguilon" message="Great performance lad 🔥" time="09:12 AM" image="https://i.pravatar.cc/45" doubleTickblue />
                    <ChatPreview name="Bruno Fernandes" message="Play the game Bruno!" time="10:21 AM" image="https://i.pravatar.cc/46" oneTickBlue active />
                </div>
            </div>
        </aside>
    );
}