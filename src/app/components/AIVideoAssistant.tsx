import { Video, HelpCircle, Play, Pause, Maximize2 } from 'lucide-react';
import { useState, useRef } from 'react';

export function AIVideoAssistant() {
  const [hasRequest, setHasRequest] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Video className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">AI Video Assistant</h3>
        </div>

        {!hasRequest ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 mb-4">Need help? Ask Jarvis for video assistance</p>
            <button
              onClick={() => setHasRequest(true)}
              className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Request Help
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Demo Video Player */}
            <div className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 ${isExpanded ? 'h-96' : 'h-48'}`}>
              <div className="relative h-full group">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src="https://videos.pexels.com/video-files/3252265/3252265-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <button
                      onClick={togglePlay}
                      className="p-2 bg-white/90 hover:bg-white rounded-full transition-all"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-gray-900" /> : <Play className="w-4 h-4 text-gray-900" />}
                    </button>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="p-2 bg-white/90 hover:bg-white rounded-full transition-all"
                    >
                      <Maximize2 className="w-4 h-4 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-800">
                <p className="text-sm font-medium text-white mb-1">Demo: Python Programming Basics</p>
                <p className="text-xs text-gray-400">Demo video (can be replaced later)</p>
              </div>
            </div>

            {/* Suggested Videos */}
            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer">
              <div className="relative h-24 bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400"
                  alt="Tutorial"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 mb-1">Understanding Arrays</p>
                <p className="text-xs text-gray-500">12:30</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer">
              <div className="relative h-24 bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400"
                  alt="Tutorial"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 mb-1">Data Structures</p>
                <p className="text-xs text-gray-500">18:45</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}