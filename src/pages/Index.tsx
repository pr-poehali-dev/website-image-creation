
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Share, Heart, Bookmark, MessageCircle } from "lucide-react";

const Index = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(245);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f7] flex flex-col items-center py-10 px-4">
      <header className="w-full max-w-xl mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#403E43] mb-2">МемХаб</h1>
        <p className="text-[#8A898C]">Коллекция лучших мемов интернета</p>
      </header>

      <main className="w-full max-w-xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-medium text-[#403E43]">Мем дня</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/c4593d66-aab9-4073-867e-2aca05a9362f.jpg" 
              alt="Мем с текстом" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLike}
                  className={liked ? "text-red-500" : "text-gray-500"}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSaved(!saved)}
                className={saved ? "text-blue-500" : "text-gray-500"}
              >
                <Bookmark className={`h-5 w-5 ${saved ? "fill-blue-500" : ""}`} />
              </Button>
            </div>
            
            <div>
              <p className="font-medium text-[#403E43]">{likes} лайков</p>
              <p className="mt-1 text-[#8A898C]">
                Классический мем с просьбой. Те, кто понимает — поймут.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-4">
          <h3 className="text-lg font-medium text-[#403E43] mb-4">Другие мемы на сайте</h3>
          <div className="grid grid-cols-3 gap-2">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg" alt="Placeholder" className="w-8 h-8 opacity-50" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]">
            Смотреть больше
          </Button>
        </div>
      </main>

      <footer className="mt-10 text-center text-[#8A898C] text-sm">
        <p>© 2023 МемХаб. Все мемы собраны в космосе.</p>
      </footer>
    </div>
  );
};

export default Index;
