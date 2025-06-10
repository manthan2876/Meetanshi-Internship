import { IoSearch } from "react-icons/io5";

function ChatPreview({ name, message, time, unread, active }) {
  return (
    <div className={`p-3 rounded-md cursor-pointer flex justify-between items-start transition-all ${active ? 'bg-red-100' : 'hover:bg-gray-100'}`}>
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{message}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-400">{time}</span>
        {unread && <span className="h-2 w-2 bg-red-500 rounded-full"></span>}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[22%] bg-white rounded-xl shadow p-4 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img className="h-12 w-12 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/40" alt="User" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Erik Ten Hag</p>
            <p className="text-sm text-gray-500">Info account</p>
          </div>
        </div>
        <IoSearch className="text-xl text-gray-500" />
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-2">Pinned Message</p>
        <div className="space-y-3">
          <ChatPreview name="Harry Maguire" message="You need to improve now" time="09:12 AM" unread />
          <ChatPreview name="United Family" message="Rashford is typing..." time="06:25 AM" unread active />
          <ChatPreview name="Rasmus Højlund" message="Bos, I need to talk today" time="03:11 AM" unread />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-2">Messages</p>
        <div className="space-y-3">
          <ChatPreview name="Andre Onana" message="I need more time bos 😅" time="11:34 AM" />
          <ChatPreview name="Reguilon" message="Great performance lad 🔥" time="09:12 AM" />
          <ChatPreview name="Bruno Fernandes" message="Play the game Bruno!" time="10:21 AM" />
        </div>
      </div>
    </aside>
  );
}