import { Link, NavLink } from 'react-router';
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/react';

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium cursor-pointer transition-colors ${
      isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'
    }`;

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-hover transition">
            O
          </div>
          <span className="font-bold text-xl tracking-tight">Odatlar kundaligi</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Show when="signed-in">
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          </Show>

          <div className="flex items-center gap-3 border-l border-border pl-6 ml-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium cursor-pointer text-text-main hover:text-primary transition">
                  Kirish
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-primary hover:bg-primary-hover cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-primary/20">
                  Boshlash
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 border-2 border-border"
                  }
                }}
              />
            </Show>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;