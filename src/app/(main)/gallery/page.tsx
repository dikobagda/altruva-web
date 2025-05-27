
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import GalleryItem from '@/components/gallery/GalleryItem';
import { galleryImages } from '@/lib/constants';

export const metadata = {
  title: 'Before & After Gallery - Altruva',
  description: 'See the stunning transformations achieved at Altruva. View our before and after gallery.',
};

export default function GalleryPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Transformations Gallery"
        subtitle="Witness the remarkable results our clients have achieved. Each image showcases the skill and artistry of our dedicated team."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
