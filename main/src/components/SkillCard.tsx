
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageSquare, Star } from "lucide-react";

interface SkillCardProps {
  id: string;
  name: string;
  skill: string;
  image: string;
  location?: string;
  category: string;
  seeking: string[];
  featured?: boolean;
}

const SkillCard = ({ 
  id, 
  name, 
  skill, 
  image, 
  location, 
  category, 
  seeking,
  featured = false
}: SkillCardProps) => {
  const navigate = useNavigate();
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${
      featured 
        ? "border-skillx-teal" 
        : "hover:border-skillx-teal/40 border-transparent"
    }`}>
      {featured && (
        <div className="bg-gradient-to-r from-skillx-green to-skillx-teal text-white text-xs px-3 py-1 text-center">
          Featured Mentor
        </div>
      )}
      <CardHeader className="p-4 pb-2 flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
          <AvatarImage src={image} />
          <AvatarFallback className="bg-skillx-green text-white">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-base">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="mb-3">
          <Badge variant="outline" className="bg-skillx-teal/10 border-skillx-teal/30 text-skillx-dark">
            {category}
          </Badge>
          {location && (
            <Badge variant="outline" className="ml-2 bg-transparent">
              {location}
            </Badge>
          )}
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-skillx-dark mb-1">Offers:</h4>
            <p className="text-sm">{skill}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-skillx-dark mb-1">Seeking:</h4>
            <div className="flex flex-wrap gap-1">
              {seeking.map((item, index) => (
                <Badge key={index} variant="secondary" className="bg-skillx-light">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="text-xs" onClick={() => navigate(`/messages?user=${id}`)}>
          <MessageSquare size={14} className="mr-1" />
          Message
        </Button>
        <Button size="sm" className="text-xs bg-skillx-green hover:bg-skillx-dark transition-colors" onClick={() => navigate(`/profile/${id}`)}>
          View Profile
          <ArrowRight size={14} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
