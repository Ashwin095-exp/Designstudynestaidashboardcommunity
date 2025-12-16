import { TopNavBar } from "./components/TopNavBar";
import { LeftSidebar } from "./components/LeftSidebar";
import { ChatWorkspace } from "./components/ChatWorkspace";
import { RightPanel } from "./components/RightPanel";
import { EdTechContent } from "./components/EdTechContent";
import { EdTechProducts } from "./components/EdTechProducts";
import { Footer } from "./components/Footer";
import { VideoLearningPanel } from "./components/VideoLearningPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <TopNavBar />

      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content Area */}
        <main className="ml-64 flex-1 pt-6 px-8 pb-0">
          {/* Chat & Output Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8">
            {/* Video Learning Panel - Left Extension */}
            <div className="xl:col-span-3 h-[600px] overflow-hidden">
              <VideoLearningPanel />
            </div>

            {/* Chat Workspace - Center */}
            <div className="xl:col-span-6 h-[600px]">
              <ChatWorkspace />
            </div>

            {/* Right Panel - AI Outputs */}
            <div className="xl:col-span-3 h-[600px]">
              <RightPanel />
            </div>
          </div>

          {/* EdTech Content Section */}
          <EdTechContent />

          {/* EdTech Products Section */}
          <EdTechProducts />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}