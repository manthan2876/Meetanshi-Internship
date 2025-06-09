export function DeleteBox({ student, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
            <div className="p-8 border shadow-lg items-center rounded-md bg-white">
                <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                {student && (
                    <p className="text-gray-600 mb-4">Are you sure you want to delete student with ID: {student.studentId}?</p>
                )}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
