import { Button } from "./ui/button";
const drinkeasyLogo = "/images/drinkeasy-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img 
              src={drinkeasyLogo} 
              alt="드링키지" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex items-center flex-1 justify-end">
            <nav className="hidden md:flex items-center space-x-8 mr-8">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">홈</a>
              <a href="#team" className="text-gray-600 hover:text-purple-600 transition-colors">팀 소개</a>
              <a href="#history" className="text-gray-600 hover:text-purple-600 transition-colors">History</a>
            </nav>

            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:inline-flex"
                onClick={() => window.open('https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80/id6741486172', '_blank')}
              >
                앱 다운로드
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}