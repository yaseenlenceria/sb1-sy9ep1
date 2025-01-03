import { Metadata } from 'next';
import VideoDownloader from '@/components/VideoDownloader';
import { Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok MP3 Downloader - Extract Audio from TikTok Videos',
  description: 'Download TikTok audio as MP3. Extract music and sounds from TikTok videos easily and for free.',
};

export default function MP3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Music className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            TikTok MP3 Downloader
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Extract and download audio from TikTok videos in MP3 format. High-quality sound, fast and free.
          </p>
        </div>

        <VideoDownloader />

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">How to Download TikTok MP3</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="font-medium mb-2">Copy Link</h3>
              <p className="text-gray-600">Copy the TikTok video URL from the app or website</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="font-medium mb-2">Paste URL</h3>
              <p className="text-gray-600">Paste the link in the input field above</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="font-medium mb-2">Download MP3</h3>
              <p className="text-gray-600">Click the download button to save the audio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}