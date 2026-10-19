import { ShieldAlert } from "lucide-react";


function ErrorState({ message, onRetry }) {
  return (
    <div className="bg-danger/10 border border-danger/20 rounded-2xl p-8 text-center max-w-lg mx-auto mt-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <ShieldAlert className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-bold text-danger mb-2">Xatolik yuz berdi</h3>
      </div>
      <p className="text-text-main mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-danger hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Qaytadan urinish
        </button>
      )}
    </div>
  );
}

export default ErrorState;