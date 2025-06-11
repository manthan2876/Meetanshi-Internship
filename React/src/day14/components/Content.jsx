import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import backgroundImage from "/bgImage.jpg"

export default function Content() {
    return (
        <main className="flex-1 overflow-scroll flex flex-col">
            <div className="flex-1 overflow-scroll p-6 space-y-4 bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <p className="text-gray-400 font-semibold text-center">Today</p>
                <ChatMessage name="Harry Maguire" time="08:34 AM" text="Hey lads, tough game yesterday. Let’s talk about what went wrong and how we can improve 😓." image="https://i.pravatar.cc/41" />
                <ChatMessage name="Bruno Fernandes" time="08:34 AM" text="Agreed, Harry 👍🏼. We had some good moments, but we need to be more clinical in front of the goal 😔." image="https://i.pravatar.cc/46" />
                <ChatMessage me time="08:34 AM" text="We need to control the midfield and exploit their defensive weaknesses. Bruno and Paul, I’m counting on your creativity. Marcus and Jadon, stretch their defense wide. Use your pace and take on their full-backs." images={["/image1.jpg", "/image2.png"]} />
            </div>
            <ChatInput />
        </main>
    );
}