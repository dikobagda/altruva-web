
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import GalleryItem from '@/components/gallery/GalleryItem';
import { galleryImages } from '@/lib/data/gallery';

export const metadata = {
  title: 'Before & After Gallery',
  description: 'Browse before and after transformations at Altruva Aesthetic Clinic Jakarta. See real results from Sofwave, facials, and regenerative treatments.',
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
