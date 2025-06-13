import { useEffect, useRef } from 'react';
import ChatMessage from '../chat/ChatMessage';
import ChatInput from '../chat/ChatInput';

export default function Content({ selectedChat, messages, sendMessage, onTyping, currentUser }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <main className="flex-1 overflow-scroll flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.length > 0 && (
                    <p className="text-gray-400 font-semibold text-center">Today</p>
                )}
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                        currentUser={currentUser}
                    />
                ))}
                {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 text-lg">Start a conversation with {selectedChat?.name}</p>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <ChatInput sendMessage={sendMessage} onTyping={onTyping} chatId={selectedChat?.id} />
        </main>
    );
}