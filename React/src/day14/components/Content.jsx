import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function Content() {
  return (
    <main className="flex-1 overflow-y-auto flex flex-col justify-between">
      <div className="p-6 space-y-4">
        <ChatMessage name="Harry Maguire" time="08:34 AM" text="Hey lads, tough game yesterday. Let’s talk about what went wrong and how we can improve 😓." />
        <ChatMessage name="Bruno Fernandes" time="08:34 AM" text="Agreed, Harry 👍🏼. We had some good moments, but we need to be more clinical in front of the goal 😔." />
        <ChatMessage me time="08:34 AM" text="We need to control the midfield and exploit their defensive weaknesses. Bruno and Paul, I’m counting on your creativity. Marcus and Jadon, stretch their defense wide. Use your pace and take on their full-backs." images={["/mnt/data/c3ff4b46-d93f-470f-86f0-45056292793d.png", "/mnt/data/c3ff4b46-d93f-470f-86f0-45056292793d.png"]} />
      </div>
      <ChatInput />
    </main>
  );
}