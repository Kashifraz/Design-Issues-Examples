 {selectedMedia && (
    <div
    className="fixed inset-0 bg-black/75 ... z-50 p-4"
    onClick={() => setSelectedMedia(null)}
    >
        <div
        className="bg-white rounded-2xl ... shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        >
        ...
        ...
        </div>
    </div>
)}
