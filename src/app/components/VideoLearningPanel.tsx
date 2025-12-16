import { Play, Clock, ChevronDown, ChevronUp, Search, Sparkles, FileText, HelpCircle, Maximize2, Settings } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  channel: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  videoUrl: string;
  topic: string;
}

export function VideoLearningPanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const currentVideo: Video = {
    id: '1',
    title: 'Data Structures Explained: Arrays, Linked Lists & Trees',
    channel: 'MIT OpenCourseWare',
    duration: '24:35',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    topic: 'Data Structures'
  };

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  };

  const suggestedVideos = [
    {
      id: '2',
      title: 'Binary Search Algorithm Tutorial',
      channel: 'freeCodeCamp',
      duration: '18:20',
      difficulty: 'Beginner' as const
    },
    {
      id: '3',
      title: 'Time Complexity Analysis',
      channel: 'CS Dojo',
      duration: '15:42',
      difficulty: 'Intermediate' as const
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Smart Video Learning</h3>
            <p className="text-xs text-gray-500">AI-matched tutorials</p>
          </div>
        </div>
        <button className="p-1 hover:bg-white/50 rounded-lg transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-4">
          {/* Search Toggle */}
          <div className="mb-4">
            {!showSearch ? (
              <button
                onClick={() => setShowSearch(true)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200"
              >
                <Search className="w-4 h-4" />
                Search videos manually
              </button>
            ) : (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search educational videos..."
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            )}
          </div>

          {/* Current Video */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-purple-600">Matched to your chat</span>
            </div>

            {/* Video Player / Thumbnail */}
            <div className="relative rounded-lg overflow-hidden bg-black mb-3">
              {!isPlaying ? (
                <>
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-48 object-cover opacity-90"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 bg-purple-500 group-hover:bg-purple-600 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 shadow-xl">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    <Clock className="w-3 h-3" />
                    {currentVideo.duration}
                  </div>
                </>
              ) : (
                <div className="relative">
                  <iframe
                    width="100%"
                    height="192"
                    src={`${currentVideo.videoUrl}?autoplay=1`}
                    title={currentVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-48"
                  ></iframe>
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <button className="p-1.5 bg-black/60 hover:bg-black/80 text-white rounded transition-colors">
                      <Settings className="w-3 h-3" />
                    </button>
                    <button className="p-1.5 bg-black/60 hover:bg-black/80 text-white rounded transition-colors">
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 leading-snug">{currentVideo.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{currentVideo.channel}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[currentVideo.difficulty]}`}>
                  {currentVideo.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* AI Interaction Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors">
              <Sparkles className="w-3 h-3" />
              Explain video
            </button>
            <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
              <FileText className="w-3 h-3" />
              Summarize
            </button>
            <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors">
              <FileText className="w-3 h-3" />
              To notes
            </button>
            <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg transition-colors">
              <HelpCircle className="w-3 h-3" />
              Ask doubt
            </button>
          </div>

          {/* Timestamp Highlights */}
          {isPlaying && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h5 className="text-xs font-medium text-gray-700 mb-2">Key Timestamps</h5>
              <div className="space-y-1.5">
                <button className="w-full text-left text-xs text-gray-600 hover:text-purple-600 transition-colors">
                  <span className="font-medium">00:45</span> - Introduction to Arrays
                </button>
                <button className="w-full text-left text-xs text-gray-600 hover:text-purple-600 transition-colors">
                  <span className="font-medium">08:20</span> - Linked Lists Basics
                </button>
                <button className="w-full text-left text-xs text-gray-600 hover:text-purple-600 transition-colors">
                  <span className="font-medium">15:30</span> - Tree Structures
                </button>
              </div>
            </div>
          )}

          {/* Suggested Videos */}
          <div>
            <h5 className="text-xs font-medium text-gray-700 mb-2">Related Videos</h5>
            <div className="space-y-2">
              {suggestedVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">{video.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{video.duration}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${difficultyColors[video.difficulty]}`}>
                        {video.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
