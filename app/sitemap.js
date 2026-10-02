import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = 'https://mariabelenalvez.com.ar'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si tenés más páginas (por ejemplo /contacto o /servicios), las podés agregar abajo así:
    /*
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}