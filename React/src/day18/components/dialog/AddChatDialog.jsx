
export default function AddChatDialog({ onClose, onAddChat, users }) {
    const handleUserClick = (user) => {
        onAddChat(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh] w-64"> {/* Added a width */}
                <h2 className="text-lg font-bold mb-4">Start New Chat</h2>
                <div className="space-y-2">
                    {users.map(user => (
                        <div
                            key={user.id}
                            className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
                            onClick={() => handleUserClick(user)}
                        >
                            <img className="h-8 w-8 rounded-full mr-3" src={user.image} alt={user.name} />
                            <span className="text-gray-800">{user.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
