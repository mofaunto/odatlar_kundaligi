import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { getHabits, deleteHabit } from '../api/habits';
import LoadingState from '../components/utils/LoadingState';
import ErrorState from '../components/utils/ErrorState';
import EmptyState from '../components/utils/EmptyState';

function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadHabits = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getHabits();
      setHabits(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHabits();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("O'chirishni tasdiqlaysizmi?")) return;
    try {
      await deleteHabit(id);
      setHabits((prev) => prev.filter((h) => h.id !== id));
      toast.success("Odat o'chirildi");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Mening odatlarim</h1>
          <p className="text-text-muted">Har kuni kichik qadamlar bilan katta natijalarga erishing.</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-medium transition shadow-lg shadow-primary/20 flex items-center gap-2 w-fit">
          <span>+</span> Yangi odat
        </button>
      </div>

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={loadHabits} />}
      
      {!loading && !error && habits.length === 0 && (
        <EmptyState message="Hozircha odatlaringiz yo'q. Yangi odat qo'shing!" />
      )}

      {!loading && !error && habits.length > 0 && (
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
                  title="O'chirish"
                >
                  🗑️
                </button>
              </div>
              <h3 className="text-lg font-bold mb-1">{habit.name}</h3>
              <p className="text-sm text-text-muted line-clamp-2">{habit.description || "Tavsif yo'q"}</p>
              
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm">
                <span className="text-text-muted">Bajarilgan:</span>
                <span className="font-bold text-primary">{habit._count.checkIns} marta</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;