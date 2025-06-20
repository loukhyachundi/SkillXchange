import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Award, BarChart3 } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Skill Matching",
    description: "AI-powered algorithm matches you with others based on complementary skills.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Personalized Experience",
    description: "Tailor your profile to showcase your abilities and what you want to learn.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Skill Recognition",
    description: "Earn badges and endorsements as you share your knowledge with others.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Progress Tracking",
    description: "Track your learning journey and skill development over time.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

const Index = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-skillx-light">
      <header className="fixed top-0 w-full z-50 px-4 py-4 bg-white/80 backdrop-blur-md shadow-sm md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-skillx-teal">Skill</span>
            <span className="text-skillx-dark">Xchange</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="pt-24 pb-16 px-4 md:px-6 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Exchange <span className="text-gradient">Skills</span>,<br />
                    Grow <span className="text-gradient">Together</span>
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                    SkillXchange connects people who want to share knowledge and learn from each other through a structured skill bartering system.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-skillx-green hover:bg-skillx-dark text-white transition-colors py-6 px-8 rounded-full text-lg" 
                    onClick={() => document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <Badge variant="outline" className="mb-4 border-skillx-teal/30 bg-skillx-teal/10 px-4 py-1 text-sm">
                Features
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need to <span className="text-gradient">exchange skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              SkillXchange provides a seamless platform for connecting with others, 
              sharing your expertise, and learning new skills from passionate individuals.
            </p>
            
            <HoverEffect items={features} className="max-w-4xl mx-auto" />
          </div>
        </section>

        <section id="auth-section" className="py-20 px-4 md:px-6 bg-skillx-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join SkillXchange Today
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Create an account to start exchanging skills and connecting with mentors who can help you grow.
              </p>
            </div>
            
            <AuthForm />
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 md:px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-skillx-teal">Skill</span>
                <span className="text-skillx-dark">Xchange</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Exchange skills, grow together. The platform for reciprocal learning and mentorship.
              </p>
            </div>
            
            <div className="md:col-span-2 md:flex md:justify-end">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-medium mb-3">Platform</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Security</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Testimonials</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Guidelines</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Company</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-skillx-teal transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SkillXchange. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-skillx-teal transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-skillx-teal transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-skillx-teal transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Star component for the landing page
const Star = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

// Badge component for the landing page
const Badge = ({ 
  children, 
  className, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "default" | "outline";
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" 
          ? "bg-skillx-teal text-white" 
          : "bg-transparent border border-muted",
        className
      )}
    >
      {children}
    </div>
  );
};
