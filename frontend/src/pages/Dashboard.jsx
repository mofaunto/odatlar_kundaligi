import { toast } from 'sonner';
import { getHabits, deleteHabit } from '../api/habits';
import LoadingState from '../components/utils/LoadingState';
import ErrorState from '../components/utils/ErrorState';
import EmptyState from '../components/utils/EmptyState';
import { useQuery } from '@tanstack/react-query';

function Dashboard() {
  const { 
    data: habits = [], 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['habits'],
    queryFn: getHabits,
  });

  const handleDelete = async (id) => {
    if (!window.confirm("O'chirishni tasdiqlaysizmi?")) return;
    try {
      await deleteHabit(id);
      toast.success("Odat o'chirildi");
      refetch(); 
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (isLoading) return <LoadingState message="Odatlar yuklanmoqda..." />;
  if (error) return <ErrorState message={error.message} onRetry={refetch} />;

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mening odatlarim</h1>
        <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl transition shadow-lg shadow-primary/20">
          + Yangi odat
        </button>
      </div>

      {habits.length === 0 ? (
        <EmptyState message="Hozircha odatlaringiz yo'q. Yangi odat qo'shing!" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {habits.map((habit) => (
            <div key={habit.id} className="bg-surface border border-border rounded-2xl p-5 hover:border-primary/50 transition group">
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg"
                  style={{ backgroundColor: `${habit.color}20`, color: habit.color }}
                >
                  ✨
                </div>
                <button 
                  onClick={() => handleDelete(habit.id)}
                  className="text-text-muted hover:text-danger transition opacity-0 group-hover:opacity-100"
                >
                  🗑️
                </button>
              </div>
              <h3 className="text-lg font-bold mb-1">{habit.name}</h3>
              <p className="text-sm text-text-muted line-clamp-2">{habit.description || "Tavsif yo'q"}</p>
              
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm">
                <span className="text-text-muted">Bajarilgan:</span>
                <span className="font-bold text-primary">{habit._count?.checkIns || 0} marta</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;