function LoadingState({ message = "Yuklanmoqda..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-surface border-t-primary rounded-full animate-spin"></div>
      <p className="text-text-muted mt-4 font-medium">{message}</p>
    </div>
  );
}

export default LoadingState;