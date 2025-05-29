function DrumCard({ pad, handleToggle }) {
    return (
        <div
            className={`drum-pad-btn ${pad.isOn ? "on-btn" : ""}`}
            style={{ backgroundColor: pad.color }}
            onClick={() => handleToggle(pad.id)}
        />
    );
}

export default DrumCard;