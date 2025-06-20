
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProfileCardProps = {
  user: {
    name: string;
    avatar: string;
    role: string;
    skills: string[];
    interests: string[];
    bio: string;
  };
  className?: string;
};

const ProfileCard = ({ user, className }: ProfileCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-skillx-teal">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="text-xl font-bold">{user.name}</h3>
        <p className="text-muted-foreground">{user.role}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-skillx-teal/10 text-skillx-dark border-skillx-teal/30">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Learning Interests</h4>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest, index) => (
              <Badge key={index} variant="outline" className="bg-skillx-green/10 text-skillx-dark border-skillx-green/30">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Bio</h4>
          <p className="text-sm text-muted-foreground">{user.bio}</p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-skillx-teal hover:bg-skillx-dark">Connect</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
