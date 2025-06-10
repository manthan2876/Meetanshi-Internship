export default function ChatMessage({ name, time, text, me = false, images = [] }) {
  return (
    <div className={`flex ${me ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-md p-4 rounded-lg ${me ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
        {!me && (
          <p className="text-sm font-semibold mb-1">{name} <span className="text-xs text-gray-400 ml-2">{time}</span></p>
        )}
        <p className="text-sm whitespace-pre-line">{text}</p>
        {images.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {images.map((img, i) => (
              <img key={i} src={img} className="w-full rounded-lg" alt="Visual" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}