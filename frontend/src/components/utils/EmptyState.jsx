import { Ghost } from "lucide-react";

function EmptyState({ message = "Ma'lumot topilmadi", onAction, actionText }) {
  return (
    <div className="bg-surface border border-border border-dashed rounded-3xl p-16 text-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Ghost className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-bold text-text-main mb-2">Bo'sh</h3>
      </div>
      <p className="text-text-muted mb-6 max-w-sm mx-auto">{message}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-medium transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export default EmptyState;