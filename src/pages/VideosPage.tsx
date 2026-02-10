import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [videoType, setVideoType] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await supabase
          .from('videos')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        setVideos(data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videoType === 'all'
    ? videos
    : videos.filter(v => v.video_type === videoType);

  const videoTitle = (video: any) => language === 'hi' ? video.title_hi : video.title_en;
  const videoDesc = (video: any) => language === 'hi' ? video.description_hi : video.description_en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('videos.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setVideoType('all')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            videoType === 'all'
              ? 'bg-amber-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setVideoType('live')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            videoType === 'live'
              ? 'bg-amber-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {t('videos.live')}
        </button>
        <button
          onClick={() => setVideoType('uploaded')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            videoType === 'uploaded'
              ? 'bg-amber-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {t('videos.uploaded')}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      ) : filteredVideos.length === 0 ? (
        <p className="text-center text-gray-600 py-20">{t('videos.noVideos')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
                {video.thumbnail_url ? (
                  <img src={video.thumbnail_url} alt={videoTitle(video)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <div className="text-gray-600 text-4xl">🎬</div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-white" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-amber-600 uppercase">
                  {video.video_type === 'live' ? '🔴 LIVE' : '📹 RECORDED'}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 mt-2">{videoTitle(video)}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{videoDesc(video)}</p>
                <button className="w-full mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
