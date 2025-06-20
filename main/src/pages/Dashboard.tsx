import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BarChart3, Clock, Plus, UserPen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SkillCard from "@/components/SkillCard";
import ProfileCard from "@/components/ProfileCard";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const skills = [
    { id: "1", name: "John Smith", skill: "React Development", image: "https://via.placeholder.com/150", category: "Development", seeking: ["UX Design", "API Integration"] },
    { id: "2", name: "Emily Chen", skill: "UI/UX Design", image: "https://via.placeholder.com/150", category: "Design", seeking: ["React", "Frontend"] },
    { id: "3", name: "Marcus Lee", skill: "Backend Development", image: "https://via.placeholder.com/150", category: "Development", seeking: ["Database", "Cloud"]} ,
    { id: "4", name: "Sarah Jones", skill: "Data Science", image: "https://via.placeholder.com/150", category: "Analytics", seeking: ["Machine Learning", "Python"] },
  ];

  const profiles = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
      role: "Frontend Developer",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      interests: ["UI/UX", "Accessibility"],
      bio: "Passionate about creating beautiful and functional user interfaces.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/150",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      interests: ["API Design", "Database Management"],
      bio: "Experienced in building scalable and efficient backend systems.",
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-skillx-light py-6">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* SkillXchange Title with Styled Colors */}
          <h1 className="text-2xl font-bold">
            <span className="text-[#3AAFA9]">Skill</span> <span className="text-black">Xchange</span>
          </h1>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search skills or people..."
              className="md:w-80"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Skill
            </Button>
            {/* Messages Section */}
            <Link to="/messages">
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Button>
            </Link>
            {/* Manage Profile (Moved to Last) */}
            <Link to="/profile">
              <Button variant="outline">
                <UserPen className="mr-2 h-4 w-4" />
                Manage Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-6 p-4">
        <Tabs defaultValue="skills" className="space-y-4">
          <TabsList>
            <TabsTrigger value="skills" className="data-[state=active]:bg-skillx-teal data-[state=active]:text-white">
              <BarChart3 className="mr-2 h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="profiles" className="data-[state=active]:bg-skillx-teal data-[state=active]:text-white">
              <Users className="mr-2 h-4 w-4" />
              Profiles
            </TabsTrigger>
            <TabsTrigger value="requests" className="data-[state=active]:bg-skillx-teal data-[state=active]:text-white">
              <Clock className="mr-2 h-4 w-4" />
              Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <SkillCard 
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  skill={skill.skill}
                  image={skill.image}
                  category={skill.category}
                  seeking={skill.seeking}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="profiles" className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProfiles.map((profile) => (
                <ProfileCard key={profile.id} user={profile} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="requests" className="text-sm text-muted-foreground">
            No requests available at the moment.
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
