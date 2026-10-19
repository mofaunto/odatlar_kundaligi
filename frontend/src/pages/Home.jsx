import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SignInButton, SignUpButton, useAuth } from '@clerk/react';
import { Rocket } from "lucide-react";

function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/dashboard');
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="flex items-center gap-2 bg-surface border border-border px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-8 animate-fade-in">
        <Rocket />
        Odatlaringizni kuzatib boring
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl">
        Har kuni <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-300">1%</span> yaxshilaning.
      </h1>
      
      <p className="text-lg text-text-muted max-w-2xl mb-10">
        Odatlar kundaligi — bu shunchaki ro'yxat emas. Bu sizning shaxsiy rivojlanish yo'lingiz. 
        Odatlarni yarating, seriyalarni (streak) saqlang va statistikangizni kuzatib boring.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <SignUpButton mode="modal">
          <button className="bg-primary hover:bg-primary-hover cursor-pointer text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-xl shadow-primary/20">
            Bepul boshlash
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className="bg-surface hover:bg-surface-hover cursor-pointer border border-border text-text-main px-8 py-3.5 rounded-xl font-semibold transition">
            Hisobim bor
          </button>
        </SignInButton>
      </div>
    </div>
  );
}

export default Home;