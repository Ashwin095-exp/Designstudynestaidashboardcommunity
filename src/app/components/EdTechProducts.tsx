import { ArrowRight } from 'lucide-react';

export function EdTechProducts() {
  const products = [
    {
      id: 1,
      name: 'Smart Study Planner',
      description: 'AI-powered scheduling that adapts to your learning pace and exam dates.',
      image: 'https://images.unsplash.com/photo-1667418624689-540f55015c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHBsYW5uZXIlMjBub3RlYm9va3xlbnwxfHx8fDE3NjU3ODY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Popular',
      tagColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'AI Note Organizer',
      description: 'Automatically categorize, tag, and summarize your study notes with AI.',
      image: 'https://images.unsplash.com/photo-1673491396472-280f3e66e08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBub3RlcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjU3ODY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'New',
      tagColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Exam Prep Toolkit',
      description: 'Practice tests, flashcards, and performance analytics to ace your exams.',
      image: 'https://images.unsplash.com/photo-1758525861622-f4e7ac86a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGFtJTIwcHJlcGFyYXRpb24lMjBkZXNrfGVufDF8fHx8MTc2NTc4NjU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Trending',
      tagColor: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Resume & Portfolio Builder',
      description: 'Professional templates and AI suggestions to showcase your achievements.',
      image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjByZXN1bWUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1Nzg2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Featured',
      tagColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="mt-12 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Supercharge Your Learning</h2>
        <p className="text-gray-600 mt-1">Premium tools designed for ambitious students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 ${product.tagColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                {product.tag}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}