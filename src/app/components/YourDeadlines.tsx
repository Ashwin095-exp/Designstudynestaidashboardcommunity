export function YourDeadlines() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">
        Your Deadlines
      </h2>

      <div className="space-y-3">

        <div className="bg-gray-50 p-3 rounded-lg border">
          <p className="font-medium text-sm">
            Math Assignment
          </p>
          <p className="text-xs text-gray-500">
            Due: Oct 12
          </p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border">
          <p className="font-medium text-sm">
            Physics Exam
          </p>
          <p className="text-xs text-gray-500">
            Due: Oct 15
          </p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border">
          <p className="font-medium text-sm">
            Chemistry Revision
          </p>
          <p className="text-xs text-gray-500">
            Due: Oct 18
          </p>
        </div>

      </div>
    </div>
  );
}
