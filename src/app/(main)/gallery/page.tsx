
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import GalleryItem from '@/components/gallery/GalleryItem';
import { galleryImages } from '@/lib/data/gallery';

export const metadata = {
  title: 'Before & After Gallery - Altruva',
  description: 'See the stunning transformations achieved at Altruva. View our before and after gallery.',
};

export default function GalleryPage() {
  return (
    <SectionWrapper>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
