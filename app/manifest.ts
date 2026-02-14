import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coffee Personality Quiz - Basecamp Coffee',
    short_name: 'Coffee Quiz',
    description: 'Discover your coffee personality and get a personalized drink recommendation!',
    start_url: '/',
    display: 'standalone',
    background_color: '#667eea',
    theme_color: '#667eea',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
