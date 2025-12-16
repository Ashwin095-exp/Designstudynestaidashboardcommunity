import { Play, Clock } from 'lucide-react';

export function VideoLearningSection() {
  const videos = [
    {
      id: 1,
      title: 'Understanding Data Structures',
      duration: '24:35',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
      topic: 'Computer Science'
    },
    {
      id: 2,
      title: 'Python for Beginners',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      topic: 'Programming'
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      duration: '32:15',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      topic: 'AI & ML'
    },
    {
      id: 4,
      title: 'Web Development Fundamentals',
      duration: '28:45',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      topic: 'Web Dev'
    }
  ];

  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-[calc(100vh-57px)] overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="font-bold text-xl text-gray-900">Smart Video Learning</h2>
          <p className="text-sm text-gray-500 mt-1">AI-curated educational content</p>
        </div>

        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer border border-gray-100"
            >
              {/* Thumbnail */}
              <div className="relative h-40 overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center transition-all">
                    <Play className="w-5 h-5 text-gray-900 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
                  {video.title}
                </p>
                <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {video.topic}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
